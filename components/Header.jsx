import Link from 'next/link'

export default function Header(){
    return (
        <header className='p-4 flex justify-around items-center shadow-sm'>
            <div className="logo">
                <h3>Q_Q</h3>
            </div>

            <div className="nav-links px-3 py-2 ">
                <Link  href='/questions'><a className='px-3 py-2 border-2 mr-2 border-blue-500'>Questions</a></Link>
                <Link  href='/submit-question'><a className='px-3 py-2 border-2 border-blue-600 bg-blue-600 text-white'>Submit A Question</a></Link>
            </div>
        </header>
    )
}