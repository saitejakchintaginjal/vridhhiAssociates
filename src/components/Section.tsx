type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  variant?: "light" | "white" | "dark";
  children: React.ReactNode;
};

export default function Section({
  id,
  title,
  subtitle,
  variant = "light",
  children,
}: Props) {
  return (
    <section id={id} className={`section section-${variant}`}>
      <div className="container">
        {title && <h2 className="section-title">{title}</h2>}
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
