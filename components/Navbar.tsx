import { useAuthUser, withAuthUser,  } from 'next-firebase-auth';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Tooltip } from './Tooltip';
import Router from 'next/router';
import Link from 'next/link';

const Navbar = () => {
  var user = useAuthUser();

  const login = () => {
    signInWithEmailAndPassword(getAuth(), 'mariosimao@poli.ufrj.br', 'password');
  }

  const logout = async () => {
    await user.signOut();

    Router.push("/");
  }

  return (
    <nav className="bg-[#6667AB] px-5 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto text-white">
        <span className="self-center text-xl font-semibold whitespace-nowrap">
          <Link href="/">Poli Vagas</Link>
        </span>
        {/* <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap">Poli Vagas</span>
        </a> */}
        { user.id === null &&
          <Link href="/login">Login</Link>
          // <a href="#" onClick={login}>Login</a>
        }
        { user.id &&
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

export default withAuthUser()(Navbar);
