
import "../../../base-styles/global.scss";

interface PropsType {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: PropsType) {
  return <>{children}</>;
}
