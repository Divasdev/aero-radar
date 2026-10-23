import calenderSync from '../../../assets/business.png';

export function ImportsItems(){
   return (
      <div className='group
      rounded-2xl
      p-6
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
      hover:bg-blue-50'>
         <img src={calenderSync}  className="group-hover:scale-110 transition-transform" />
      </div>
   )
}