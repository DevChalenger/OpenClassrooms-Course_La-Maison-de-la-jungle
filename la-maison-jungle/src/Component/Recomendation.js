function Recomendation() {
  const currentMonth = new Date().getMonth();
  const isSpring = currentMonth >= 2 && currentMonth <= 5;
  if (!isSpring) {
    return <div>This is not Spring, see you soon</div>;
  } else {
    return <div>This is the Spring, welcome</div>;
  }
}
export default Recomendation;
