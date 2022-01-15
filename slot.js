// 슬롯 이미지를 3개만 넣을 수 있는 머신 이라고 가정하자.
class Machine extends React.Component {
  render() {
    // console.log(this.props.slot);
    const s1 = this.props.s1;
    const s2 = this.props.s2;
    const s3 = this.props.s3;
    let randomNumArr = () => {
      return [randomSlot(), randomSlot(), randomSlot()];
    };
    const randomSlot = () => {
      let mathNum = Math.floor(Math.random() * 3) + 1;
      if (mathNum === 1) {
        return s1;
      } else if (mathNum === 2) {
        return s2;
      } else if (mathNum === 3) {
        return s3;
      } else {
        return 'Somthing wrong';
      }
    };
    // 3게임
    const anyfruits1 = randomNumArr();
    const anyfruits2 = randomNumArr();
    const anyfruits3 = randomNumArr();

    // 같은 그림인지 체크
    function checkWin(arrNum) {
      console.log(arrNum);
      if (arrNum[1] === arrNum[2] && arrNum[0] === arrNum[1]) {
        return 'U Win';
      }
      return 'U Lose';
    }

    return (
      <div>
        <p>{anyfruits1} : What I have</p>
        <p>{checkWin(anyfruits1)}</p>
        <p>{anyfruits2} : What I have</p>
        <p>{checkWin(anyfruits2)}</p>
        <p>{anyfruits3} : What I have</p>
        <p>{checkWin(anyfruits3)}</p>
      </div>
    );
  }
}
