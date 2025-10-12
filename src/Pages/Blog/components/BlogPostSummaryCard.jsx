import React from 'react'
import { useNavigate } from 'react-router-dom'
import CharAvatar from '../../../components/Cards/CharAvatar'

const BlogPostSummaryCard = ({
  title,
  coverImageUrl,
  description,
  tags=[],
  updatedOn,
  authorName,
  authProfileImg,
  onClick
}) => {

  const navigate = useNavigate()

  return (
    <div 
      className="bg-white shadow-lg shadow-gray-100 rounded-xl overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <img 
        src={coverImageUrl} 
        alt={title}
        className="w-full h-64 object-cover" 
      />

      <div className="p-4 md:p-6">
        <h2 className="text-base md:text-lg font-bold mb-2 line-clamp-3">{title}</h2>
        <p className="text-gray-700 text-xs mb-4 line-clamp-3">{description}</p>

        <div className="flex items-center flex-wrap gap-2 mb-4">
          {tags.slice(0,3).map((tag, index) => (
            <button
              key={index} 
              className="bg-sky-200/50 text-sky-800/80 text-xs font-medium px-3 py-0.5 rounded-full text-nowrap cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                navigate(`/tag/${tag}`)
              }}
            >
              # {tag}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">

            {authProfileImg && authProfileImg !== 'null' && authProfileImg !== 'undefined' && authProfileImg.trim() !== '' ? (
              <img
                src={authProfileImg}
                alt={authorName}
                className="w-10 h-10 bg-slate-400 rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.insertAdjacentHTML(
                    'afterend',
                    `<div class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-400 text-white font-semibold text-xl">
                      ${authorName ? authorName[0].toUpperCase() : '?'}
                    </div>`
                  );
                }}
              />
            ) : (
              <CharAvatar
                fullName={authorName}
                width="w-10"
                height="h-10"
                style="text-xl"
              />
            )}


          <div>
            <p className="text-gray-600 text-sm">{authorName}</p>
            <div className="text-gray-500 text-xs">{updatedOn}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPostSummaryCard