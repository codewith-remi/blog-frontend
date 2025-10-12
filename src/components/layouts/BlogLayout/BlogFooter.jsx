import React from 'react'
import { Link } from 'react-router-dom'
import { BLOG_NAVBAR_DATA } from '../../../utils/data'

const BlogFooter = ({ activeMenu }) => {
  return (
    <div className="mt-[50px] py-5 flex items-center justify-between flex-wrap md:flex-nowrap">
      <div className="flex flex-col gap-[14px] flex-1">
        <div className="flex items-center gap-[2px]">
          <img src="https://res.cloudinary.com/dqzvt0oro/image/upload/v1759231546/pej78fkl8rnspcg9zeht.png" alt='' className="h-[50px] md:h-[50px]"/>
          <h1 className="text-lg font-semibold">REMIBLOG</h1>
        </div>
        <p className="font-light">
            Explore insightful articles, trending topics and valuable knowledge 
            shared by our community. At <strong>Remi Blog</strong>, learning meets 
            inspiration, join us on this journey!
        </p>
        <div className="mt-[10px] mb-[20px] flex gap-[10px]">
          <img src="/facebook.png" alt='' width={18} height={18}/>
          <img src="/instagram.png" alt='' width={18} height={18}/>
          <img src="/tiktok.png" alt='' width={18} height={18}/>
          {/* <Image src="/youtube.png" alt='' width={18} height={18}/> */}
        </div>
      </div>
      <div className="flex flex-1 justify-end gap-[100px] max-[1024px]:gap-[30px] max-md:w-full max-md:justify-between max-sm:text-sm">
        <div className="flex flex-col gap-[10px] font-light">
          <span className="font-bold">Links</span>
          {/* <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link> */}
           {BLOG_NAVBAR_DATA.map((item, index) =>{
              if(item?.onlySideMenu) return

              return(
                <Link key={item.id} to={item.path}>
                  <li className="text-[15px] text-black font-medium list-none relative group cursor-pointer w-fit">
                    <span className="relative inline-block">
                      {item.label}
                      <span
                        className={`absolute left-0 bottom-0 h-[2px] bg-sky-500 transition-all duration-300 origin-left 
                          ${activeMenu === item.path ? "scale-x-100" : "scale-x-0"} 
                          group-hover:scale-x-100`}
                        style={{ width: "100%" }}
                      ></span>
                    </span>
                  </li>

                </Link>
              );
            })} 
        </div>
        <div className="flex flex-col gap-[10px] font-light">
          <span className="font-bold">Tags</span>
          <Link href="/">Programming</Link>
          <Link href="/">Security</Link>
          {/* <Link href="/">Networking</Link> */}
          <Link href="/">Graphics</Link>
        </div>
        <div className="flex flex-col gap-[10px] font-light">
          <span className="font-bold">Socials</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          {/* <Link href="/">Youtube</Link> */}
        </div>
      </div>
    </div>
  )
}

export default BlogFooter