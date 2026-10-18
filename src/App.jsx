import Student from '../pages/Student'
import Profile from '../pages/Profile'
import Product from '../pages/Product'
import CustomButton from '../pages/CustomButton'
import Employee from '../pages/Employee'

const App=() =>{
    return (
        <div >
            <Student name="Karan Rawat" age={21} course="Full Stack" />

            <Profile
                name="Karan Rawat"
                image="https://i.pinimg.com/736x/59/2a/26/592a2699d90f08bee1ca454cc2077db7.jpg"
                city="Chandigarh"
            />

            <Product name="Wireless Mouse" price={799} description="Ergonomic wireless mouse with USB receiver." />
            <Product name="Mechanical Keyboard" price={2999} description="RGB backlit mechanical gaming keyboard." />
            <Product name="Type-C Cable" price={299} description="Fast charging braided USB-C cable." />



            <CustomButton text="Submit" bgColor="green" />
            <CustomButton text="Cancel" bgColor="orange" />
            <CustomButton text="Learn More" bgColor="sky blue" />


            <Employee name="Karan" role="Frontend Developer" salary={65000} />
            <Employee name="Ishan" role="UI/UX Designer" salary={60000} />
            <Employee name="Adashpal" role="Backend Developer" salary={75000} />
        </div>
    );
}

export default App;