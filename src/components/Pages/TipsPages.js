import Nav from '../Nav';
import Hheadar from '../Hheadar';
import Footer from '../Footer';
import Titell21 from '../Titell21'
import Ways from '../Ways'
import video1 from '../../video/vid1.mp4';
import video2 from '../../video/vid2.mp4';
import video3 from '../../video/vid3.mp4';
import video4 from '../../video/vid4.mp4';
import video5 from '../../video/vid5.mp4';
import video6 from '../../video/vid6.mp4';
import video7 from '../../video/vid7.mp4';
import video8 from '../../video/vid8.mp4';



import CardTips from '../CardTips'

function TipsPages() {
 return (
   <>
       <Hheadar/>
       <Nav/>
<Titell21/>
    

   <h2 >
     Diabetics need to follow a healthy lifestyle and manage their blood sugar levels well to maintain their health. Here are some
   </h2>


   <CardTips videoSrc={video1} videoPoster="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQOSGmilb_aYt2i_SKNKU8-3wvcqO7ss3JlL4Y8d6Gt9wMogk9hlZ2UnvIat8UiPid9Y6Wuro5XvvjtWW2L-XAoNLnC9RU-E5-ydyGxAANOxHTNLu2RQCsSybpu9rXHrkSUu81Hdohz11-s1LdVe7BL3B2D2i5lRSUTug21cLIRcT3S76lOcUQi52N/s1200/%D9%81%D9%8A%D9%8A%D9%8A%D9%8A%D9%8A%D9%8A%D9%8A%D9%8A%D9%8A%D9%8A%D9%8A%D9%8A.jpg" btntitle="Proper nutrition" heading=" Eat balanced meals that contain complex carbohydrates, proteins, and
       healthy fats. Avoid foods rich in sugar and saturated fats.
"/>
   <CardTips videoSrc={video2} videoPoster="https://blog.rosheta.com/wp-content/uploads/2021/02/1_839458_highres.jpg" btntitle="Monitor blood sugar levels:" heading=" Measure your blood sugar levels regularly using a blood sugar meter, and
       keep a record of the results to share with your doctor.
"/>
   <CardTips videoSrc={video3} videoPoster="http://www.feedo.net/Fitness/images/PhysicalActivityForAllAges5.jpg" btntitle="Physical activity:" heading=" Exercise regularly, such as walking or swimming, for at least 30 minutes
       on most days of the week.
"/>
   <CardTips videoSrc={video4} videoPoster="https://www.daralteb.net/wp-content/uploads/2018/03/%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D9%88%D8%B2%D9%86.jpg" btntitle="Weight management:" heading=""/>
   <CardTips videoSrc={video5} videoPoster="https://img.asharq.com/edcdba8f-f6e9-42f8-b677-8c1e8cb68cb9.jpg?ixlib=js-2.3.2&w=1200&h=630&dpr=2&q=90&fit=crop&fp-x=0.5333333333333333&fp-y=0.73&fp-z=1&crop=focalpoint&s=802cc91b350a0cdf530942d8e285f6a6" btntitle="Taking medications:" heading=" Follow your doctor’s instructions regarding the medications prescribed
       to you, and do not hesitate to consult him if you have any questions.
"/>
   <CardTips videoSrc={video6} videoPoster="https://palsawa.com/thumb/1200x630/uploads/images/SpPVq.jpg" btntitle="Health Education:" heading=" Make sure to learn more about diabetes and how to manage it by attending
       workshops or reading educational materials.
"/>
   <CardTips videoSrc={video7} videoPoster="https://media.gemini.media/img/large/2019/6/2/2019_6_2_12_19_9_511.jpg" btntitle="Quit smoking:" heading=" If you smoke, quitting can improve your overall health and reduce your
       risk of complications.
"/>
   <CardTips videoSrc={video8} videoPoster="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjE4oIMUThC0rMoUvsbvxxBH1d4MlJhVuAHZ6J37fjn6tcY8l-vltpa9SHZxSBYpeS7GzhyphenhyphenLO178hpQWMcYTOg8S1BalvhZl6xqfQQkcwq94oXtZoqy8OT7sTAipNmOpSVFaO4dhsnTzXb3Zhf0tV9IUB21QbCf1K1pWiPNhh6kxbQedG9hk75PsbcoN1kA/s16000-rw/%D9%83%D9%88%D8%B1%D8%B3%20%D9%81%D9%8A%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AA%D9%88%D8%AA%D8%B1%20%D9%88%D8%A7%D9%84%D9%88%D9%82%D8%AA%20%D9%85%D9%86%20%D8%AC%D8%A7%D9%85%D8%B9%D8%A9%20%D9%88%D9%84%D8%A7%D9%8A%D8%A9%20%D8%A3%D8%B1%D9%8A%D8%B2%D9%88%D9%86%D8%A7.webp" btntitle="Manage stress:" heading="    Use relaxation techniques such as meditation or yoga to reduce stress
       levels, as stress can affect blood sugar levels.
"/>
<Ways/>
<h2>
     Following these tips can help diabetics maintain their health and reduce the risk of complications associated with the disease.
   </h2>
   <Footer/>
   </>
 );
}


export default TipsPages;