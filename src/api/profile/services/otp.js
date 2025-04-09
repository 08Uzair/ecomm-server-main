"use strict";

const nodemailer = require("nodemailer");

/**
 * Function to generate a random 6-digit OTP.
 */
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

/**
 * Function to generate the HTML email template with the OTP.
 */
const generateEmailTemplate = (OTP) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color:rgb(206, 206, 206);
          margin: 0;
          padding: 0;
        }
        .container {
          width: 100%;
          max-width: 600px;
          margin: 20px auto;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .header {
          background-color:rgb(76, 76, 76);
          color: #000;
          text-align: center;
          padding: 20px;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
        }
        .content {
          padding: 20px;
          color: #333333;
          line-height: 1.6;
        }
        .otp {
          display: inline-block;
          margin: 20px 0;
          padding: 10px 20px;
          background-color: #3c3c3c;
          color:#000000;
          font-size: 20px;
          font-weight: bold;
          border: 5px solid #000000;
          border-radius: 10px;
        }
        .footer {
          background-color: #f4f4f4;
          text-align: center;
          padding: 10px;
          font-size: 12px;
          color: #666666;
        }
        .footer a {
          color: #000000;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Uzer Ecomm</h1>
        </div>
        <div class="content">
          <p>Hi,</p>
          <p>Thank you for signing up at <strong>Uzer Ecomm</strong>! To verify your email address, please use the OTP below:</p>
          <div class="otp">${OTP}</div>
          <p>If you did not request this email, please ignore it. This OTP will expire in 10 minutes.</p>
          <p>Best regards,<br>Team Uzer Ecomm</p>
        </div>
        <div class="footer">
          <p>&copy; 2025 Uzer Ecomm. All rights reserved.</p>
          <p><a href="https://uzerqureshi-portfolio.netlify.app">Visit Our Portfolio </a></p>
        </div>
      </div>
    </body>
    </html>
  `;
};

/**
 * Function to send OTP email.
 */
module.exports.sendOTP = async (email) => {
  const OTPData = generateOTP();
  console.log("Generated OTP:", OTPData);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "uq0803@gmail.com", // Use environment variable
      pass: "zxcj acec oefp tlrw", // Use environment variable
    },
  });

  const mailOptions = {
    from: `"Uzer Ecomm" `, // Correct email format
    to: email,
    subject: "Your OTP for Your Email Verification at Ecommerce Uzer Ecomm",
    text: `Your OTP is ${OTPData}`,
    html: generateEmailTemplate(OTPData), // Use the correct OTP variable
  };

  try {
    await transporter.sendMail(mailOptions);
    return OTPData; // Return OTP for storage
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send OTP");
  }
};
