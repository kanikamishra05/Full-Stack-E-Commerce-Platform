declare namespace Express {
  export interface Request {
    user?: {
      id: string;
      role: string;
    };
    session: {
      id: string;
    };
  }
  export interface Response {
    user: any;
  }
}
// declare module "express";
// declare module "jsonwebtoken";
// declare module "nodemailer";
// declare module "pdfkit";
// declare module "passport";
