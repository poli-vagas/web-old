import { Tooltip } from './Tooltip';
import Router from 'next/router';
import Link from 'next/link';
import { getAuth, signOut } from 'firebase/auth';

const Navbar = () => {
  var user = getAuth().currentUser;

  const logout = async () => {
    await signOut(getAuth());

    Router.push("/");
  }

  return (
    <nav className="bg-[#6667AB] px-5 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto text-white">
        <div className="self-center whitespace-nowrap">
          <span className="text-xl font-semibold mr-10">
            <Link href="/">Poli Vagas</Link>
          </span>
          { user && <>
            <span className="text-md font-normal mr-5">
              <Link href="/add-company">Nova empresa</Link>
            </span>
            <span className="text-md font-normal">
              <Link href="/add-job">Nova vaga</Link>
            </span>
          </>}
        </div>
        {/* <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap">Poli Vagas</span>
        </a> */}
        { user === null &&
          <Link href="/login">Login</Link>
          // <a href="#" onClick={login}>Login</a>
        }
        { user &&
          <div className="flex">
            <span className="hidden md:block">👤 {user.email}</span>
            <Tooltip message="Logout" position="bottom">
              <a href="#" onClick={logout} className="ml-3">🡆</a>
            </Tooltip>
          </div>
        }
      </div>
    </nav>
  )
}

export default Navbar;
