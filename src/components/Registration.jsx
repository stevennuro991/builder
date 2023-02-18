import { Menu, Switch, Transition } from '@headlessui/react';
import { Field, Form, Formik } from 'formik';
import { Fragment, useEffect, useRef, useState, React } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useLocation } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";





function Registration() {
  const [enabled, setEnabled] = useState(false)
  const [activeButton,setActiveButton] = useState('button1');

  const handleButtonClick = (button)=>{
    setActiveButton(button);
  }
  return (
    <div className='flex py-3  h-screen space-y-5 justify-evenly'>
   
      <div className='border-solid rounded-[15px]  h-[90%] w-2/4  border-[#5ad935] border-[2px] p-5  bg-white space-y-5' >

        <div className='flex justify-between item-center w-full'>
          <h1>Register as a..</h1>
          <button className='text-red-400'>cancel</button>
        </div>

        <div className='flex space-x-4 '>
          <button className={`${activeButton ==='button1'?'bg-green-300 text-white':'bg-gray-300'}bg-white text-[10px] rounded-full border p-1 fon border-gray-400}`} onClick={()=>handleButtonClick('button1')}>Realtor(Developer)</button>
          <button className={`${activeButton ==='button2'?'bg-green-300 text-white':'bg-gray-300'}bg-white text-[10px] rounded-full border p-1 fon border-gray-400}`} onClick={()=>handleButtonClick('button2')}>Realtor(Agent)</button>
          <button className={`${activeButton ==='button3'?'bg-green-300 text-white':'bg-gray-300'}bg-white text-[10px] rounded-full border p-1 fon border-gray-400}`} onClick={()=>handleButtonClick('button3')}>Custruction Firm</button>
        </div>
        <Formik
          initialValues={{
            name: '',
            phone:'',
            picture:"",
            location : "",
            website:"",
            email:"",


          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form className='h-full py-5'>
            <div className='flex flex-col justify-between h-[90%] '>
              <div className='flex flex-col w-full space-y-5'>
                <div className='flex w-full space-x-20'>
                  <div className='w-1/3 flex flex-col space-y-3'>
                    <label className='' htmlFor="name">Name</label>
                    <Field className="border text-xs  border-black rounded-full pl-3 p-1" id="name" name="name" placeholder="enter name" />
                  </div>
                  <div className='flex flex-col justify-center items-center space-y-3'>
                    <h1>Upload Profile Picture</h1>
                    <button className='w-8 h-8 items-center flex justify-center'><svg width="17.166" height="14.101" viewBox="0 0 17.166 14.101">
                      <defs>
                        <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
                          <stop offset="0" stop-color="#004cff" />
                          <stop offset="0.375" stop-color="#f09" />
                          <stop offset="0.676" stop-color="#8125c0" />
                          <stop offset="1" stop-color="#0012ff" />
                        </radialGradient>
                      </defs>
                      <g id="camera" transform="translate(-0.001 -2.625)">
                        <path id="Union_3" data-name="Union 3" d="M1.494,14.1A1.5,1.5,0,0,1,0,12.593V3.239A1.5,1.5,0,0,1,1.494,1.732H4.9C4.9-.318,6.551.021,8.583.021s3.678-.338,3.678,1.711h3.41a1.5,1.5,0,0,1,1.494,1.507v9.354A1.5,1.5,0,0,1,15.672,14.1Z" transform="translate(0.001 2.625)" fill="url(#radial-gradient)" />
                        <g id="Path_128" data-name="Path 128" transform="translate(3.616 5.207)" fill="none">
                          <path d="M4.968,0A4.968,4.968,0,1,1,0,4.968,4.968,4.968,0,0,1,4.968,0Z" stroke="none" />
                          <path d="M 4.96774959564209 0.9999971389770508 C 2.779929637908936 0.9999971389770508 1 2.780157089233398 1 4.968276977539062 C 1 7.156396865844727 2.779929637908936 8.936556816101074 4.96774959564209 8.936556816101074 C 7.155569553375244 8.936556816101074 8.93549919128418 7.156396865844727 8.93549919128418 4.968276977539062 C 8.93549919128418 2.780157089233398 7.155569553375244 0.9999971389770508 4.96774959564209 0.9999971389770508 M 4.96774959564209 -2.86102294921875e-06 C 7.71135950088501 -2.86102294921875e-06 9.93549919128418 2.224377155303955 9.93549919128418 4.968276977539062 C 9.93549919128418 7.712177276611328 7.71135950088501 9.936556816101074 4.96774959564209 9.936556816101074 C 2.22413969039917 9.936556816101074 0 7.712177276611328 0 4.968276977539062 C 0 2.224377155303955 2.22413969039917 -2.86102294921875e-06 4.96774959564209 -2.86102294921875e-06 Z" stroke="none" fill="#fff" />
                        </g>
                      </g>
                    </svg></button>
                  </div>
                </div>

                <div className='flex flex-col w-full space-y-5'>
                  <h1>Location Served</h1>
                  <div className='flex w-full space-x-8 items-center justify-start'>
                    <p className='text-xs font-thin text-gray-400'>Inter-Regional</p>

                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className={`${enabled ? 'bg-green-600' : 'bg-green-200'
                        } relative inline-flex border-green-400 h-4 w-10 items-center rounded-full`}
                    >
                      <span
                        className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                      />
                    </Switch>

                    <Menu as="div" className="relative inline-block text-left bg-green-100 rounded-3xl">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md  bg-opacity-20 px-4 py-0.5 text-xs font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                          Select Location
                          <ChevronDownIcon
                            className="ml-2 -mr-1 h-5 w-5 text-black hover:text-violet-100"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="px-1 py-1 ">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >

                                  Greater Accra
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  Ashanti Region
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >

                                  Volta Region
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  Northern Region
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  Upper West Region
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <div className='w-full flex flex-col space-y-2'>
                    <label className='' htmlFor="name">Phone</label>
                    <div className='flex space-x-5'>
                      <Field className="border text-sm  border-black rounded-full p-1" id="name" name="name" placeholder="+233 xxxxxx" />
                      <Field className="border text-sm  border-black rounded-full p-1" id="name" name="name" placeholder="+233 xxxxxx" />
                    </div>
                  </div>
                  <div className='w-full flex flex-col space-y-2'>
                    <div className='w-full flex items-center justify-between'>
                      <div className='w-full'>
                        <label className='' htmlFor="name">Website</label>
                      </div>
                      <div className='w-full'>
                        <label className='' htmlFor="name">Email</label>
                      </div>
                    </div>
                    <div className='w-full flex items-center justify-between '>
                      <div className='w-full pr-10'>
                        <Field className="border w-full text-sm  border-black rounded-full p-1" id="name" name="name" placeholder="www.xxxxx" />
                      </div>
                      <div className='w-full pr-10'>
                        <Field className="border text-sm w-full  border-black rounded-full p-1" id="name" name="name" placeholder="@xxxx" />
                      </div>
                    </div>

                  </div>
                </div>

              </div>
              <div className='items-center justify-center flex '>
                <button className='p-2 text-sm rounded-full border bg-green-200 border-green-500' type="submit">Sign Up</button>
              </div>

            </div>

          </Form>
        </Formik>


      </div>
      {/* <div className='p-20 w-1/2'>
        <div className='border-solid rounded-[15px]  h-[50%] w-[100%]  border-blue-400 border-[2px] p-5  bg-white'>
          <h1>Login Form</h1>
          <Formik
            initialValues={{
              name: '',
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form className='h-full py-5'>
              <div className='flex flex-col justify-between h-[90%] '>
                <div className='flex flex-col w-full space-y-5'>
                  <div className='flex w-full space-x-20'>
                    <div className='w-[70%] flex flex-col space-y-3'>
                      <label className='' htmlFor="name">Username</label>
                      <Field className="border text-xs  border-black rounded-full pl-3 p-1" id="name" name="name" placeholder="enter name" />
                      <label className='' htmlFor="name">Password</label>
                      <Field className="border text-xs  border-black rounded-full pl-3 p-1" id="name" name="name" placeholder="enter name" />
                    </div>
                  </div>
                  <div className='items-center w-full justify-center flex '>
                    <button className='p-2  w-[30%] h-10 rounded-full border bg-blue-300 ' type="submit">Sign In</button>
                  </div>
                </div>


              </div>

            </Form>
          </Formik>

        </div>
      </div> */}
   <button className='text-red-400 h-[5%] bg-red-200 rounded border border-red-500 p-2'>
        Auto Contractors
      </button>


    </div>
  )
}

export default Registration