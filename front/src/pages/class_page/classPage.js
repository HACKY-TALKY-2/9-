import React, {useState, useEffect} from 'react';
import Header from '../../components/header/Header';
import rightData from '../../config/board_right.json'
import axios from 'axios'

const ClassPage = () =>{

    const [check, setCheck] = useState(true);

    {/**이미지 저장전 후 */}
    const [upload, setUpload] = useState(false);
    {/** 미리보기 이미지 저장 */}
    const [preview, serPreview] = useState();

    const [profile, setProfile] = useState();

    {/** 이미지 저장 */}
    const [selectedFile, setSelectedFile] = useState(null);

    {/**이미지 데이터 저장 */}
    const [data, setData] = useState();


    const setPreviewImg = (event) => {

        {/** 이미지 보내기 위해 임시저장 */}
        const file = event.target.files[0];
        setSelectedFile(file);

        {/** 미리보기 이미지 저장 */}
        var reader = new FileReader();
        reader.onload = function(event) {
            serPreview(event.target.result);
            setUpload(true);
        };

        reader.readAsDataURL(event.target.files[0]);
    }
    {/**게시글 작성 껐다 켰다 */}
    const writePost = () =>{
        if(check){
            setCheck(false);
        }
        else{
            setCheck(true);
        }
    }

    {/**이미지 데이터만 뽑는 코드 */}
    const extractImages = (data) => {
        return data.map(item => item.user.map(user => user.image)).flat().filter(image => image !== null);
      };

    const extractDate = (dateTime) => {
    return dateTime.split('T')[0];
    };

    const settingPost = async (id) =>{
        try {
            // id는 실제 사용하는 Path Variable 값으로 대체되어야 합니다.
            const response = await axios.get(`http://101.101.218.99:3030/gathering/postofactivity/${id}`);
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const setting = ( activityId ) => {
        const matchingActivity = rightData.data.find((activity) => activity.activity_id === activityId);

        if (!matchingActivity || matchingActivity.user.length === 0) {
          return <div className = "h-16 rounded-xl bg-gray-300 flex justify-around items-center">
                    존재하지 않습니다.
                </div>
        }
        const userImages = matchingActivity.user.map((user) => (
          <img onClick={() => settingPost(activityId)} key={user.id} src={user.image} alt={user.name} className="w-10 h-10 rounded-full"/>
        ));
      
        return (
          <div className = "h-16 rounded-xl bg-gray-300 flex justify-around items-center">
            {userImages}
          </div>
        );
      };

    useEffect(()=>{
        const images = extractImages(rightData.data);
        setProfile(images);
    }, [])

    return(
        <>
        <div className ="w-full h-screen">
            <Header/>
            <img src = "/images/main.jpg" className = "h-40 w-full"/>
            <div className = "w-full h-36 bg-black"></div>
            <div className = "w-full h-full pl-44 mr-10">

                <div className = "w-full h-full flex">

                    {/** 게시글 부분 */}
                    <div className = "w-2/3 h-full mb-5">
                        <div className = "w-full h-frame border-x-2">

                            <div className = "w-full h-14 p-2 flex">
                                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgFzCLnXmumPgINh0dqVOfXKIoiZwrPGb4g&usqp=CAU" className = "rounded-full w-10 h-10"/>
                                <div className = "h-14 pb-2 w-20 flex flex-col justify-start items-start pl-2">
                                    <div className = "text-xs mb-1 font-semibold">aiminghee3</div>
                                    <div className = "text-xs">자기계발</div>
                                </div>
                            </div>

                            <div className = "flex w-full bg-gray-50 rounded-lg">
                                <img className = "w-full h-taller" src = "https://cdn.pixabay.com/photo/2023/10/26/18/18/coneflower-8343278_1280.jpg"/>
                            </div>

                            <div className = "w-full bg-gray-white rounded-lg flex flex-col items-start">
                                <div className = "h-10 px-4 pt-3 font-semibold text-sm">aiminghee3</div>
                                <div className = "flex items-start justify-start">Taiwan, election interference and the war in the Middle East will be on the agenda, officials say. But the leaders will also look for ways to strengthen ties.</div>
                                <div className = "text-gray-400 font-semibold text-xs pl-2">2023년 11월 11일</div>
                            </div>

                        </div>

                        {check ? 
                            <></> 
                            :
                            
                                <div class="fixed bottom-0 w-full h-56 pr-4 bg-white border-2 flex">

                                    <div class="flex w-32 h-32 p-4 mt-5">
                                        {/** 이미지 업로드 */}
                                        {upload === true ? 
                                        <label className = "w-full h-full rounded-xl">
                                        <img src = {preview} className = "w-32 h-32 rounded-xl"/>
                                        <input id="dropzone-file" type="file" class="hidden" onChange={setPreviewImg}/>
                                        </label>
                                        :
                                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-white">
                                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                        <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                                        </svg>
                                                    </div>
                                                    <input id="dropzone-file" type="file" class="hidden" onChange={setPreviewImg}/>
                                                </label>
                                        }
                                        </div> 

                                    <div className = "w-full mr-10">
                                        <input type="text" id="large-input" className="block w-full h-44 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"/>
                                        <div  className = "w-full h-12 flex justify-center items-center">
                                            <button className = "border-2 w-24 rounded-lg">작성하기</button>
                                        </div>
                                    </div>
                                </div>
                            
                            }
                    </div>

                    {/** 오른쪽 부분 */}
                    <div className = "w-1/3 h-full mr-5 ml-5">
                        <div className = "h-14 w-full flex mt-2 justify-center">
                            <button className = "border-y-2 border-l-2 w-32">모임생성</button>
                            <button className = "border-2 w-32" onClick={writePost}>게시글 작성</button>
                        </div>

                        <div className = "w-full mt-1">
                        {rightData.data.map((item, index) => (
                        <div key={index}>
                            <div className = "text-sm text-gray-400 mb-2">{extractDate(item.appointment_time)}</div>
                                {setting(item.activity_id)}
                        </div>  
                        ))}
                            <div className = "text-sm text-gray-400 mb-2">2023년 11월 11일</div>
                            <div className = "h-16 rounded-xl bg-gray-300 flex justify-around items-center">
                                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgFzCLnXmumPgINh0dqVOfXKIoiZwrPGb4g&usqp=CAU" className = "w-10 h-10 rounded-full"/>
                                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgFzCLnXmumPgINh0dqVOfXKIoiZwrPGb4g&usqp=CAU" className = "w-10 h-10 rounded-full"/>
                                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgFzCLnXmumPgINh0dqVOfXKIoiZwrPGb4g&usqp=CAU" className = "w-10 h-10 rounded-full"/>
                                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgFzCLnXmumPgINh0dqVOfXKIoiZwrPGb4g&usqp=CAU" className = "w-10 h-10 rounded-full"/>
                                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgFzCLnXmumPgINh0dqVOfXKIoiZwrPGb4g&usqp=CAU" className = "w-10 h-10 rounded-full"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ClassPage;