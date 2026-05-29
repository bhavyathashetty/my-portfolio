const PageTitle = ({ eyebrow, title, children }) => {
  return (
    <section className="page-title">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {children && <div className="page-title-copy">{children}</div>}
    </section>
  );
};

export default PageTitle;
