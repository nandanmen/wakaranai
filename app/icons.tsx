import { motion } from "framer-motion";

export const CheckCircle = (
  props: React.ComponentPropsWithoutRef<typeof motion["path"]>
) => {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <motion.path
        d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75V4.75C16.0041 4.75 19.25 7.99594 19.25 12V12C19.25 16.0041 16.0041 19.25 12 19.25V19.25C7.99594 19.25 4.75 16.0041 4.75 12V12Z"
        {...props}
      />
      <motion.path
        d="M9.75 12.75L10.1837 13.6744C10.5275 14.407 11.5536 14.4492 11.9564 13.7473L14.25 9.75"
        {...props}
      />
    </svg>
  );
};

export const CloseCircle = (
  props: React.ComponentPropsWithoutRef<typeof motion["path"]>
) => {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <motion.path
        d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75V4.75C16.0041 4.75 19.25 7.99594 19.25 12V12C19.25 16.0041 16.0041 19.25 12 19.25V19.25C7.99594 19.25 4.75 16.0041 4.75 12V12Z"
        {...props}
      />
      <motion.path d="M9.75 9.75L14.25 14.25" {...props} />
      <motion.path d="M14.25 9.75L9.75 14.25" {...props} />
    </svg>
  );
};

export const MinimizeIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="M10.25 18.25V13.75H5.75" />
      <path d="M13.75 5.75V10.25H18.25" />
      <path d="M4.75 19.25L10.25 13.75" />
      <path d="M19.25 4.75L13.75 10.25" />
    </svg>
  );
};

export const ExpandIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="M4.75 14.75V19.25H9.25" />
      <path d="M19.25 9.25V4.75H14.75" />
      <path d="M5 19L10.25 13.75" />
      <path d="M19 5L13.75 10.25" />
    </svg>
  );
};
