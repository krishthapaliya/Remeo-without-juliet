import React from 'react'

const Createevent = () => {
  return (
    <div className='mx-24'>
        <h1 className='text-center text-3xl font-extrabold p-8'>Create Events</h1>
         <form className='mx-24 p-20 rounded-3xl bg-slate-200'> 
              {/* Existing Fields */}
              <div className="mb-4">
                <label
                  htmlFor="orgName"
                  className="block text-lg font-semibold"
                >
                  Organization Name<span className='text-red-600'> *</span>
                </label>
                <input
                  type="text"
                  id="orgName"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-xl"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-semibold">
                  Organization Email <span className='text-red-600'> *</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-xl"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-lg font-semibold">
                  Organization Contact 
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-xl"
                />
              </div>
              

              <div className="mb-4">
                <label
                  htmlFor="startDate"
                  className="block text-lg font-semibold"
                >
                  Start Date <span className='text-red-600'> *</span>
                </label>
                <input
                  type="date"
                  id="startDate"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-xl"
                  required
                />
               </div> 

               <div className="mb-4">
                <label
                  htmlFor="duration"
                  className="block text-lg font-semibold"
                >
                  Duration <span className='text-red-600'> *</span>
                </label>
                <input
                  type="text"
                  id="duration"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-xl"
                  placeholder="e.g., 2 hours, 1 day"
                  required
                />
              </div>

            
              {/* New Fields for Action Data and Event Image */}
              <div className="mb-4">
                <label
                  htmlFor="action"
                  className="block text-lg font-semibold"
                >
                  Action Data <span className='text-red-600'> *</span>
                </label>
                <select
                  id="action"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-xl"
                  required
                >
                  <option value="volunteer">Volunteer</option>
                  <option value="donate">Donate</option>
                  <option value="partner">Partner</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="location"
                  className="block text-lg font-semibold"
                >
                  Location <span className='text-red-600'> *</span>
                </label>
                <input
                  type="text"
                  id="location"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-xl"
                  required
                />
              </div>
              

              <div className="mb-4">
                <label
                  htmlFor="eventImage"
                  className="block text-lg font-semibold"
                >
                  Event Image <span className='text-red-600'> *</span>
                </label>
                <input
                  type="file"
                  id="eventImage"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-xl"
                  accept="image/*"
                  required
                />
              </div>
              
             
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-lg font-semibold"
                >
                  Description <span className='text-red-600'> *</span>
                </label>
                <textarea
                  id="description"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-xl"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 m-6 py-2 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
    </div>
  )
}

export default Createevent