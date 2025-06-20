module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  // 👇 Add this to set the public URL of your hosted Strapi app
  url: env('RENDER_EXTERNAL_URL', 'https://ecomm-server-main.onrender.com'),

  app: {
    keys: env.array('APP_KEYS'),
  },

  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },

  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
