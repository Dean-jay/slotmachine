class App extends React.Component {
  render() {
    return (
      <div>
        <h1>This is Slot Machine: What you made</h1>
        <Machine s1='🍬' s2='🍋' s3='🍄' slot={['🍬', '🍋', '🍄']} />
        <MultiMachine slot={['🍬', '🍋', '🍄']} credit={2} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
