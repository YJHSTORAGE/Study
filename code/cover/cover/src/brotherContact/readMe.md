第一步：在Brother1组件的componentDidMount生命周期里面加上 this.props.init && this.props.init(this),把Brother1都传递给父组件，
第二步父组件里面  <Brother1 init={inf => this.Brother1 = inf} />;
第三步  <button type="button" onClick={() =>this.Brother1.handleClick()}>测试</button>