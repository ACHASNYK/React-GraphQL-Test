class HeaderButton extends Component {
    
    displayList(){
        const data = this.props.data;
        // console.log(data);
        if(data.loading) {
            return(<div>Loading...</div>)
        }else{
            return data.categories.map(items => {
                return (<li><a href= "/:this.name">{items.name}</a></li>);
            })
        }
    }
    
    
    render() {
  
      return (
        <div id="main">
            <ul id="Categories">
                {this.displayList() }
            </ul>
        </div>
      );
    }
  
}
export default graphql(allCatQuery)(Navbar)