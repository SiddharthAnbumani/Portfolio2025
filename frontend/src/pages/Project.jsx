import Spline from "@splinetool/react-spline";
import AppBarMui from "../components/AppBarMui";
{/* <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.79/build/spline-viewer.js"></script>
<spline-viewer url="undefined"></spline-viewer> */}

{/* <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.79/build/spline-viewer.js"></script>
<spline-viewer url="undefined"></spline-viewer> */}

{/* <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.79/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/R2EWQ6-zNL1LmiDv/scene.splinecode"></spline-viewer> */}

export default function Project(){
    return (
       <div>
      <AppBarMui/>

        <div className="spline-background">
            <Spline scene="https://prod.spline.design/R2EWQ6-zNL1LmiDv/scene.splinecode"/>
        </div>
        <div>
            
        </div>
       </div>
    )
}