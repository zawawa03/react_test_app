declare module '@tailwindcss/vite';
declare module "daisyui";
declare module "axios";

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}