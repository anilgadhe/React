import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { ArrDataBinding } from './data-binding/databinding1.jsx'
import {Objectbinding} from './object-databinding/object-databinding.jsx'
import { ArrofObject } from './Arrayofobject.jsx/Arrofobj.jsx'
import {Nested} from "./nested-dataBinding/nested.jsx"
import {XMLHttpAjax} from "./Ajaxmethod/XMLHttpAjax.jsx"
import {FetchAjax} from "./Ajaxmethod/fetchAjax.jsx"
import {MouseAnimation} from "./event-Binding/Mouse-animation/mouseAnimation.jsx"
import {MouseOver} from "./event-Binding/onMouseOver/onMouseOver.jsx"
import {MouseMove} from "./event-Binding/mouse-move/mouseMove.jsx"
import { KeyUp } from './event-Binding/KeyUp/KeyUp.jsx'
import {EmiCalculator} from "./EMI-Calculator/EMICalculator.jsx" 
import {Throttle} from "./event-Binding/TimeEvents/throttle.jsx"
import {VoumeUp} from "./event-Binding/TimeEvents/volume.jsx"
import {Stopwatch} from "./event-Binding/TimeEvents/stopwatch.jsx"
import {CarouselDemo} from "./event-Binding/TimeEvents/carousel.jsx"
import {FormDemo} from "./Forms/form.jsx"
import { FormikDemo } from './Forms/formik/form-demo.jsx'
import {FormikYupDemo} from './Forms/formik/validationUsingYup.jsx'
import {FormikYupRest} from './Forms/formik/validationyupUsingRest.jsx'
import {FormikComponent} from './Forms/formik/formikComponent.jsx'
import {FormDataDemo} from './Forms/FormData.jsx'
import {ReactHookDemo} from './Forms/ReactHookDemo/reactHookForm.jsx'
import {GridComponent} from './controlled-Component/Data-grid/gridComponent.jsx'
import {ConditionalRender} from './conditionalRendering/firstDemo.jsx'
import { LoginHookDemo } from './Hooks/getCaptchay/login.jsx'
import { DataGridDemo } from './conditionalRendering/Datagrid/datagridComponent.jsx'
import { SignInOut } from './conditionalRendering/third-demo.jsx'
import { Multer } from './forMulter/muter.jsx'
import { CustomerLogin } from './classComponent/class.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ArrDataBinding/> */}
    {/* <Objectbinding/> */}
    {/* <ArrofObject/> */}
    {/* <Nested/> */}
    {/* <XMLHttpAjax/> */}
    {/* <FetchAjax/> */}
    {/* <MouseOver/> */}
    {/* <MouseAnimation/> */}
    {/* <MouseMove/> */}
    {/* <EmiCalculator/> */}
    {/* <Throttle/> */}
    {/* <VoumeUp/> */}
    {/* <Stopwatch/> */}
    {/* <CarouselDemo/> */}
    {/* <FormDemo/> */}
    {/* <FormikDemo/> */}
    {/* <FormikYupDemo/> */}
    {/* <FormikYupRest/> */}
    {/* <FormikComponent/> */}
    {/* <FormDataDemo/> */}
    {/* <ReactHookDemo/> */}
    {/* <GridComponent/> */}
    {/* <ConditionalRender/> */}
    {/* <LoginHookDemo/> */}
    {/* <DataGridDemo/> */}
    {/* <SignInOut/> */}
    {/* <Multer/> */}
    <CustomerLogin/>
  </StrictMode>,
)
