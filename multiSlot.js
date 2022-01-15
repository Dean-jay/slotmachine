/**
 * Q. 적절한 Credit 계산의 위치는 어디인가?
 * Credit은 버튼을 누를 때마다 계산되어야 한다.
 * Q. storedCredit 적절한 State 위치.
 * Q. 정확한 환수율 계산식.
 */
class MultiMachine extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { count: 0, basicCredit: 10000 };
  }
  handleChange(e) {
    e.preventDefault();
    console.log('hello');
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  render() {
    const slot = this.props.slot;
    const slotNum = slot.length;
    let storedCredit =
      this.state.basicCredit + this.state.count * this.props.credit;

    // 적절한 머신을 만들어야 한다.
    if (slot.length < 3 || slot.length > 9) {
      return <h1>We need proper slot in here</h1>;
    }

    return (
      <div>
        <h2>Multi Slot Machine</h2>
        <p>당첨시 금액 : {storedCredit}</p>
        <p>
          환수율(당첨확률*당첨금액/한 번 하는데 드는 돈) :{' '}
          {((1 / (slotNum * slotNum * slotNum)) * 100 * storedCredit) /
            this.props.credit}
        </p>
        <button onClick={this.handleChange}>Game Slot!</button>
      </div>
    );
  }
}
