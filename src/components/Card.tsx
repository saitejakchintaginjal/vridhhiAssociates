type Props = {
  children: React.ReactNode;
  hover?: boolean;
  dark?: boolean;
};

export default function Card({ children, hover = true, dark }: Props) {
  return (
    <div
      className={`card ${hover ? "card-hover" : ""} ${dark ? "card-dark" : ""}`}
    >
      {children}
    </div>
  );
}