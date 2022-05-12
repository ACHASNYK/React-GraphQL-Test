import react, {Component} from "react";
import { Link } from "react-router-dom";
class HeaderButton extends Component {

   
    
    render() {
  
      return (
        <div className="button">
            <Link to={`/${this.props.link}`}>{this.props.name}</Link>
        </div>
      );
    }
  
}
export default HeaderButton;