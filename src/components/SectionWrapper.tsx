type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
};

const SectionWrapper = ({ id, title, children }: Props) => {
  return (
    <section id={id} className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
