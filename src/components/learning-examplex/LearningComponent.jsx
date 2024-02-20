import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import ForthComponent from "./ForthComponent";

export default function ReturnAllComponent() {
        return (
            <div className="components">
                <FirstComponent/>
                <SecondComponent/>
                <ThirdComponent/>
                <ForthComponent/>
            </div>
        )
}