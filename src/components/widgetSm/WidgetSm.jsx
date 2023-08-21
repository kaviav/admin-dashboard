import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";

export const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Welcome memb</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://www.mckinsey.com/~/media/mckinsey/featured%20insights/diversity%20and%20inclusion/women%20in%20the%20workplace%202022/women%20in%20the%20workplace%202022_standard_1536x1536.jpg?mw=677&car=42:25"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Juvana Harrison</span>
            <span className="widgetSmUserJob">Software Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://www.mckinsey.com/~/media/mckinsey/featured%20insights/diversity%20and%20inclusion/women%20in%20the%20workplace%202022/women%20in%20the%20workplace%202022_standard_1536x1536.jpg?mw=677&car=42:25"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Juvana Harrison</span>
            <span className="widgetSmUserJob">Software Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://www.mckinsey.com/~/media/mckinsey/featured%20insights/diversity%20and%20inclusion/women%20in%20the%20workplace%202022/women%20in%20the%20workplace%202022_standard_1536x1536.jpg?mw=677&car=42:25"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Juvana Harrison</span>
            <span className="widgetSmUserJob">Software Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://www.mckinsey.com/~/media/mckinsey/featured%20insights/diversity%20and%20inclusion/women%20in%20the%20workplace%202022/women%20in%20the%20workplace%202022_standard_1536x1536.jpg?mw=677&car=42:25"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Juvana Harrison</span>
            <span className="widgetSmUserJob">Software Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://www.mckinsey.com/~/media/mckinsey/featured%20insights/diversity%20and%20inclusion/women%20in%20the%20workplace%202022/women%20in%20the%20workplace%202022_standard_1536x1536.jpg?mw=677&car=42:25"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Juvana Harrison</span>
            <span className="widgetSmUserJob">Software Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};
