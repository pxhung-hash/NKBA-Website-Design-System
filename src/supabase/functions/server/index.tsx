import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { createClient } from "npm:@supabase/supabase-js@2";

const app = new Hono();

// Create Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY') || '';

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-f61d8c0d/health", (c) => {
  return c.json({ status: "ok" });
});

// Authentication Routes

// Register new user
app.post("/make-server-f61d8c0d/auth/register", async (c) => {
  console.log('=== REGISTER REQUEST RECEIVED ===');
  try {
    const body = await c.req.json();
    console.log('Request body:', body);
    const { name, email, password, company } = body;

    // Validate input
    if (!name || !email || !password) {
      console.log('Validation failed: missing required fields');
      return c.json({ error: "Vui lòng điền đầy đủ thông tin bắt buộc" }, 400);
    }

    console.log(`Creating user with email: ${email}`);
    
    // Create Supabase admin client
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    console.log('Supabase client created');

    // Create user with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: email,
      password: password,
      email_confirm: true, // Auto-confirm email since we don't have email server configured
      user_metadata: {
        name: name,
        company: company || '',
      },
    });

    if (authError) {
      console.error('Auth error during registration:', authError);
      return c.json({ error: authError.message || "Không thể tạo tài khoản" }, 400);
    }

    console.log('User created in Supabase Auth:', authData.user.id);

    // Store additional user profile data in KV store
    const userId = authData.user.id;
    await kv.set(`user:${userId}`, {
      id: userId,
      name: name,
      email: email,
      company: company || '',
      role: 'member',
      createdAt: new Date().toISOString(),
    });

    console.log(`User registered successfully: ${email}`);

    return c.json({
      success: true,
      message: "Đăng ký thành công",
      user: {
        id: userId,
        email: email,
        name: name,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    return c.json({ error: "Có lỗi xảy ra trong quá trình đăng ký: " + (error instanceof Error ? error.message : 'Unknown error') }, 500);
  }
});

// Login user
app.post("/make-server-f61d8c0d/auth/login", async (c) => {
  try {
    const { email, password } = await c.req.json();

    if (!email || !password) {
      return c.json({ error: "Vui lòng nhập email và mật khẩu" }, 400);
    }

    // Create Supabase client with anon key for login
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Sign in with password
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (authError) {
      console.error('Auth error during login:', authError);
      return c.json({ error: "Email hoặc mật khẩu không đúng" }, 401);
    }

    if (!authData.session) {
      return c.json({ error: "Không thể tạo phiên đăng nhập" }, 401);
    }

    // Get user profile from KV store
    const userId = authData.user.id;
    const userProfile = await kv.get(`user:${userId}`);

    const userData = userProfile || {
      id: userId,
      email: authData.user.email,
      name: authData.user.user_metadata?.name || 'User',
      company: authData.user.user_metadata?.company || '',
      role: 'member',
    };

    console.log(`User logged in successfully: ${email}`);

    return c.json({
      success: true,
      access_token: authData.session.access_token,
      user: userData,
    });
  } catch (error) {
    console.error('Login error:', error);
    return c.json({ error: "Có lỗi xảy ra trong quá trình đăng nhập: " + (error instanceof Error ? error.message : 'Unknown error') }, 500);
  }
});

// Verify token and get user info
app.get("/make-server-f61d8c0d/auth/me", async (c) => {
  try {
    const authHeader = c.req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const accessToken = authHeader.split(' ')[1];
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);

    if (error || !user) {
      return c.json({ error: "Invalid token" }, 401);
    }

    // Get user profile from KV store
    const userProfile = await kv.get(`user:${user.id}`);

    const userData = userProfile || {
      id: user.id,
      email: user.email,
      name: user.user_metadata?.name || 'User',
      company: user.user_metadata?.company || '',
      role: 'member',
    };

    return c.json({ user: userData });
  } catch (error) {
    console.error('Auth verification error:', error);
    return c.json({ error: "Authentication failed" }, 401);
  }
});

// Logout (client-side handles token removal, this is just for logging)
app.post("/make-server-f61d8c0d/auth/logout", async (c) => {
  try {
    console.log('User logged out');
    return c.json({ success: true, message: "Đăng xuất thành công" });
  } catch (error) {
    console.error('Logout error:', error);
    return c.json({ error: "Có lỗi xảy ra khi đăng xuất" }, 500);
  }
});

Deno.serve(app.fetch);