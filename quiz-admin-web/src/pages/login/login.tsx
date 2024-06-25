import bgDashboard from '@/assets/images/bg_dashboard.svg'
import styles from './login.module.css'
import classNames from "classnames";
import { useEffect, useState } from "react";
import CheckUtils from "@/utils/checkutils";
import { useAccountStore } from "@/modules/store/accountStore";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, updateEmail] = useState<string>("")
  const [password,updatePassword] = useState<string>("")
  const [disabled,updateDisabled] = useState<boolean>(false)
  const signIn = useAccountStore((state) => state.signIn)
  const hasLogin = useAccountStore((state) => state.hasLogin)
  const navigate = useNavigate()
  useEffect(()=>{
    updateDisabled(!(CheckUtils.isNotEmpty(password) && CheckUtils.isNotEmpty(email)))
  },[email,password])

  useEffect(()=>{
    // if login,jump to main
    if (hasLogin()) {
      // JUMP
      navigate('/dashboard')
    }

  },[])

  async function handleLoginLogic() {
    await signIn(email, password);
    if (hasLogin()) {
      // JUMP
      navigate('/dashboard')
    }
    // ERROR

  }

  return (
    <div className='flex h-full text-white'>
      <div className="flex flex-1 flex-col h-full justify-center content-center items-center">
        <div className="flex flex-col gap-1">
          <span className="text-xl">Email</span>
          <label className='input input-bordered flex items-center p-0 bg-white text-black'>
            <input type='text' value={email} className='grow w-96 pl-3 ' onChange={e => updateEmail(e.target.value)} placeholder='Enter your email.' />
          </label>
        </div>
        <div className="flex flex-col gap-1 mt-8">
          <span className="text-xl">Password</span>
          <label className='input input-bordered flex items-center p-0 bg-white text-black'>
            <input type='password' className='grow w-96 pl-3' value={password} onChange={e => updatePassword(e.target.value)} placeholder='Input your password.'/>
          </label>
        </div>

        <button className="btn btn-primary w-96 text-white disabled:text-white/45 font-bold text-xl mt-8 bg-blue-400 disabled:bg-blue-200"  disabled={disabled} onClick={handleLoginLogic}>Login</button>
      </div>
      <div className="flex-1">
        <img src={bgDashboard} className={classNames(styles['bg-image'],'h-full','w-full','opacity-55')} />
      </div>
    </div>
  )
}

export default LoginPage
