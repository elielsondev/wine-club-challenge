import Image from 'next/image';
import Wine from '../public/images/WineLogo.png';

function WineLogo() {
  return (
    <div>
        <Image
          src={Wine}
          alt="Wine Logo"
          width={100}
          height={28}
        />
      </div>
  )
}

export default WineLogo