import { GoogleLogin, GoogleLogout } from 'react-google-login'
//import { GoogleLogin } from '@react-oauth/google';
//import { GoogleOAuthProvider } from '@react-oauth/google';
import { gapi } from 'gapi-script'  //구글에서 제공하는 서비스에 쉽게 접근할 수 있도록 도와주는 라이브러리
import { useEffect } from 'react';

/*
1. 구글 로그인 요청
2. 구글 서버는 token, name, email...등 값을 넘겨줌
3. 받은 값들을 백엔드 서버로 넘겨주면서 로그인 요청
4. 서버에서 정상적으로 로그인 되었다면 유저정보를 응답해줌
5. 응답받은 유저정보를 통해 유저상태를 업데이트하여 화면에 표시해주면 됨
*/

const clientId = '345125496363-2s05mv5fh7llmek2314lc0mskhat98jq.apps.googleusercontent.com';
const Google = ({onSocial})=>  {
    useEffect(() => {
      function start(){
        gapi.client.init({
          clientId,
          scope: 'email',
        });
      }
    })
    const successGoogle = (response) => {
      console.log(response);
    }
  
    const failGoogle = (response) => {
      console.log(response);
    }
    const onLogoutSuccess = () => {
      console.log('SUCESS LOG OUT');
    }
    return (
      <div className="GoogleButton">
          <GoogleLogin
            clientId={clientId}
            onSuccess={successGoogle}
            onFailure={failGoogle}
          />

      </div>
      
    );
  }
  
  export default Google;