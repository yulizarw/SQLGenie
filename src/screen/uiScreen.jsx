import React, { useState, useEffect, useRef } from 'react'

import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Autocomplete from 'react-autocomplete'
import EventListener, { withOptions } from 'react-event-listener'
//action
import { setDropDownState } from '../store/action/userAction';

//asset
import logo from '../assets/icons/fi-rr-database.png'
import threeDotLogo from '../assets/icons/fi-rr-menu-dots-vertical.png'
import closeIcon from '../assets/icons/fi-rr-cross-circle.png'
import plusIcon from '../assets/icons/plus(1).png'

export const UiScreen = () => {
    const inputFilter = useRef()
    const clcikBody = useRef()
    const customInput = useRef()

    const dispatch = useDispatch();
    const [tempStateMenu, setTemp] = useState({})

    useEffect(() => {
        dispatch(setDropDownState(inputFilter.current))
        setTemp(inputFilter.current)

    })


    const [selectedValue, setSelectedValue] = useState('')
    const [tagValue, setTagValue] = useState([])


    const templateDropDown = [
        {
            id: '0',
            name: 'name',
            type: 'varchar',
            size: '10',
            label: 'Name - Varchar - 10'
        },
        {
            id: '1',
            name: 'name',
            type: 'varchar',
            size: '20',
            label: 'Name - Varchar - 20'
        },
        {
            id: '2',
            name: 'namban',
            type: 'integer',
            size: '',
            label: 'Namban - Int'
        },
        {
            id: '3',
            name: 'name',
            type: 'varchar',
            size: '10',
            label: 'Name - Varchar - 10'
        },
        {
            id: '4',
            name: 'name',
            type: 'varchar',
            size: '20',
            label: 'Name - Varchar - 20'
        },
        {
            id: '5',
            name: 'namban',
            type: 'integer',
            size: '',
            label: 'Namban - Int'
        },
    ]

    const [templateDropDownTemp, setTemplateDropDownTemp] = useState([{
        name: '',
        type: '',
        size: '',
        label: ''
    }])
    const changeSelectedValue = (e) => {
        setSelectedValue(e)
    }

    const changeSelectedValueNoFilter = (e) => {
        setSelectedValue(e)

        // setTemplateDropDownTemp({ ...templateDropDownTemp[0], label: e })

    }

    const selectSelectedValue = (val) => {
        setSelectedValue(val)
        setTagValue([...tagValue, val])

    }

    const clickCloseIcon = (e, i) => {
        e.preventDefault()
        const filterTag = tagValue.filter((item, id) => i !== id)
        setTagValue(filterTag)

        console.log(i, 'sioni')

    }
    var flag = false

    if (!tempStateMenu) {
        flag = false

    } else {
        flag = true
        window.onclick = () => {
            setSelectedValue('')
        }
    }

    const onSubmitNew = (e) => {
        e.preventDefault()
        console.log(selectedValue.split('/').join(' - '), 'asd2')
        const val = selectedValue.split('/').join(' - ')
        setTagValue([...tagValue, val])
    }

    console.log(inputFilter.current == null, 'asd')
    console.log(customInput, 'CUSTOMINPU')
    console.log(flag, 'flag')
    return (
        <>
            <div ref={clcikBody} className='grid' style={{ backgroundColor: "#E5E5E5", maxHeight: '100%' }}  >
                <div className='row'>
                    <div className="hold-transition login-page" style={{ backgroundColor: "#E5E5E5" }}>
                        <h1 style={{
                            position: 'absolute', top: '10.25%',
                            fontFamily: 'Nunito',
                            lineHeight: '27px',
                            fontSize: '20px',
                            fontWeight: '700',
                            fontStyle: 'normal'
                        }}>
                            HI, Anton
                        </h1>


                        <form style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            padding: '0px',
                            width: '210px',
                            height: '86px',
                            left: '615px',
                            marginTop: 'calc(50% - 86px/2 - 43px)',
                            marginBottom: '50%',
                            marginLeft: '42.7%',
                            marginRight: '42.7%'
                        }}>
                            <div class='row'>
                                <p style={{
                                    display: 'flex',

                                    top: '8px', left: '8px',
                                    lineHeight: '16.37px',
                                    fontStyle: 'normal',
                                    width: '100px',
                                    fontSize: '12px',
                                    marginBottom: '10px',
                                    justifyContent: 'center',
                                    padding: '8px',
                                    color: '#353535'
                                }}>
                                    Column Name
                                </p>


                                <div className="mb-3" style={{ display: 'inline-flex', padding: '0px', justifyContent: 'center', width: '210px', height: '44px' }}>

                                    <div style={{
                                        width: '44px',
                                        borderRight: '0px',
                                        backgroundColor: 'white',
                                        borderTopLeftRadius: '4px',
                                        borderBottomLeftRadius: '4px',
                                        padding: '10px 10px 10px 15px',

                                    }}>
                                        <img src={logo} alt="Canvas Logo" style={{ size: '16px', backgroundColor: 'white', }} />
                                    </div>

                                    <div>
                                        {selectedValue.length > 0 && templateDropDown.filter((item, i) => item.label[0].toLowerCase() === selectedValue[0].toLowerCase()).length > 0
                                            ?
                                            <Autocomplete type="text"
                                                className="input-txt1"

                                                id="input-filter" data-filter={templateDropDown}

                                                // autocomplete start
                                                items={templateDropDown}
                                                shouldItemRender={(item, value
                                                ) => item.label.toLowerCase()
                                                    .indexOf(value.toLowerCase()) > -1}

                                                getItemValue={item => item.label}

                                                renderItem={(item, isHighlighted) =>
                                                    selectedValue.toLowerCase()[0] === item.label.toLowerCase()[0] ? <div
                                                        style={{
                                                            background: isHighlighted ?
                                                                '#FFDDDD' : '#FFFFFF',
                                                            width: '134px',
                                                            height: '32px',
                                                            borderTopLeftRadius: '0px',
                                                            borderBottomLeftRadius: '0px',
                                                            justifyContent: 'flex-start',
                                                            display: 'flex',
                                                            marginLeft: '11.5px',
                                                            marginBottom: '8px',
                                                            padding: '8px',
                                                        }}
                                                        key={item.id}>
                                                        {item.label} <br></br>

                                                    </div> : <div>
                                                    </div>
                                                }

                                                value={selectedValue}
                                                onChange={e => changeSelectedValue(e.target.value)}
                                                onSelect={(val) => selectSelectedValue(val)}
                                                ref={inputFilter}
                                                menuStyle={{
                                                    display: 'block !important',
                                                    onMenuVisibilityChange: 'open',
                                                    open: true,
                                                    // width: '210px',
                                                    height: 'auto',
                                                    // display: 'flex',
                                                    flexDirection: 'row',
                                                    flexWrap: 'wrap',
                                                    fontFamily: 'nunito',
                                                    marginLeft: '0px',
                                                    marginTop: '19px',
                                                    marginLeft: '-42px',
                                                    marginBottom: '12px',
                                                    textAlign: 'center',
                                                    borderRadius: '8px',
                                                    background: '#FFFFFF',
                                                    padding: '15px 0px 10px',
                                                    // fontSize: '90%',
                                                    // position: 'float',
                                                    overflow: 'auto',
                                                    maxHeight: '169px',
                                                    fontSize: '12px',
                                                    lineHeight: '16px',
                                                    zIndex: 1,


                                                }}
                                                inputProps={{
                                                    style: {
                                                        fontFamily: 'Nunito',
                                                        fontSize: '12px',
                                                        width: '166px',
                                                        height: '44px',
                                                        top: '42px',
                                                        // position: 'static',
                                                        paddingTop: '14px',
                                                        paddingBottom: '14px',
                                                        paddingRight: '21px',
                                                        paddingLeft: '26px',
                                                        border: '0',
                                                        borderTopLeftRadius: '0px',
                                                        borderBottomLeftRadius: '0px',

                                                    },
                                                    placeholder: "Write your field name"
                                                }}
                                            // autocomplet finsih
                                            ></Autocomplete>


                                            : <Autocomplete type="text"
                                                className="form-control input-txt1"

                                                id="input-filter" data-filter={templateDropDown}
                                                // autocomplete start
                                                items={templateDropDown}
                                                shouldItemRender={(item, value
                                                ) => item.label.toLowerCase()
                                                    .indexOf(value.toLowerCase()) > -1}

                                                getItemValue={item => item.label}

                                                renderItem={(item, isHighlighted) =>
                                                    selectedValue.toLowerCase()[0] === item.label.toLowerCase()[0] ? <div
                                                        style={{
                                                            background: isHighlighted ?
                                                                '#FFDDDD' : '#FFFFFF',
                                                            width: '134px',
                                                            height: '32px',
                                                            borderRadius: '4px',
                                                            justifyContent: 'flex-start',
                                                            display: 'flex',
                                                            marginLeft: '11.5px',
                                                            marginBottom: '8px',
                                                            padding: '8px'
                                                        }}
                                                        key={item.id}>
                                                        {selectedValue} <br></br>

                                                    </div> : <div>
                                                    </div>
                                                }

                                                value={selectedValue}
                                                onChange={e => changeSelectedValue(e.target.value)}
                                                onSelect={(val) => selectSelectedValue(val)}
                                                menuStyle={{
                                                    onMenuVisibilityChange: 'open',
                                                    open: false,
                                                    width: '210px',
                                                    height: '169px',
                                                    fontFamily: 'nunito',
                                                    marginTop: '19px',
                                                    marginLeft: '-42px',
                                                    marginBottom: '12px',
                                                    textAlign: 'center',
                                                    borderRadius: '8px',
                                                    background: 'transparent',
                                                    padding: '15px 0px 10px',
                                                    fontSize: '90%',
                                                    position: 'fixed',
                                                    overflow: 'auto',
                                                    // maxHeight: '50%',
                                                    fontSize: '12px',
                                                    lineHeight: '16px',
                                                    zIndex: 1
                                                }}
                                                inputProps={{
                                                    style: {
                                                        fontFamily: 'Nunito',
                                                        fontSize: '12px',
                                                        width: '166px',
                                                        height: '44px',
                                                        top: '42px',
                                                        position: 'static',
                                                        paddingTop: '14px',
                                                        paddingBottom: '14px',
                                                        paddingRight: '21px',
                                                        paddingLeft: '26px',
                                                        border: '0',
                                                        borderTopLeftRadius: '0px',
                                                        borderBottomLeftRadius: '0px',
                                                        borderTopRightRadius: '4px',
                                                        borderBottomRightRadius: '4px'
                                                    },
                                                    placeholder: "Write your field name"
                                                }}
                                            // autocomplet finsih

                                            ></Autocomplete>
                                        }
                                    </div>

                                </div>
                                {inputFilter.current == null && selectedValue.length > 0 && templateDropDown.filter((item, i) => item.label.toLowerCase() !== selectedValue.toLowerCase()).length > 0
                                    &&

                                    <div ref={customInput} style={{
                                        width: '210px',
                                        height: 'auto',
                                        fontFamily: 'nunito',

                                        marginBottom: '12px',
                                        textAlign: 'center',
                                        borderRadius: '8px',
                                        background: '#FFFFFF',
                                        padding: '15px 0px 10px',


                                        overflow: 'auto',
                                        maxHeight: '169px',
                                        fontSize: '12px',
                                        lineHeight: '16px',
                                        zIndex: 1,
                                        justifyContent: 'flex-start',

                                    }}>
                                        <button onClick={(e) => onSubmitNew(e)} type="button" className='btn' style={{
                                            width: '149px',
                                            height: '32px',
                                            backgroundColor: '#FF5050',
                                            borderRadius: '4px',
                                            fontFamily: 'nunito',
                                            fontSize: '12px',
                                            fontWeight: '600',
                                            color: '#FFFFFF',
                                            textAlign: 'left',

                                            marginLeft: '15px',
                                            marginBottom: '14px',
                                            marginRight: '49px',
                                            zIndex: 1,
                                            padding: '8px',

                                            display: 'flex', flexDirection: 'row',

                                        }}>

                                            <img src={plusIcon} alt="Canvas Logo" style={{
                                                size: '8px',
                                                height: '8px',
                                                marginTop: '3px',
                                                marginRight: '12px',
                                                color: 'white'
                                            }}
                                            />

                                            <p style={{ fontFamily: 'nunito', fontWeight: '600', fontSize: '10px', width: '106px', fontWeight: 'normal' }}>Create New Column</p>


                                            <a ><img src={closeIcon} alt="Canvas Logo" style={{
                                                size: '12px',
                                            }} />
                                            </a>

                                        </button> {selectedValue.split('/').join(' - ')}</div>

                                }
                                {tagValue.length > 0 &&
                                    <div style={{

                                        width: '210px',
                                        height: 'auto',
                                        fontFamily: 'nunito',
                                        //    marginTop: '245px',
                                        marginBottom: '100px',
                                        textAlign: 'center',
                                        borderRadius: '8px',
                                        background: '#FFFFFF',
                                        fontSize: '90%',
                                        //    position: 'fixed',
                                        overflow: 'auto',
                                        maxHeight: '121px',
                                        fontSize: '12px',
                                        lineHeight: '16px',
                                        padding: '0px',
                                        scrollBehavior: 'smooth',
                                        flexFlow: 'row wrap'
                                    }}>
                                        {tagValue.length > 0 && (tagValue.map((mapValue, i) => (
                                            <button type="button" className='btn' style={{
                                                width: '149px',
                                                height: '32px',
                                                backgroundColor: '#FF5050',
                                                borderRadius: '4px',
                                                fontFamily: 'nunito',
                                                fontSize: '12px',
                                                fontWeight: '600',
                                                color: '#FFFFFF',
                                                textAlign: 'left',
                                                marginTop: '20px',
                                                marginLeft: '21px',
                                                marginBottom: '14px',
                                                marginRight: '40px',

                                                padding: '8px',
                                                display: 'flex',
                                                // flexDirection: 'row',
                                                zIndex: '1',
                                            }}>


                                                <p style={{ fontFamily: 'nunito', fontSize: '9px', width: '85px', fontWeight: 'normal' }}>{mapValue}</p>

                                                <a><img src={threeDotLogo} alt="Canvas Logo" style={{
                                                    size: '12px',
                                                    marginLeft: '12px',
                                                    marginRight: '12px'
                                                }} />
                                                </a>
                                                <a onClick={(e) => clickCloseIcon(e, i)}><img src={closeIcon} alt="Canvas Logo" style={{
                                                    size: '12px',
                                                }} />
                                                </a>

                                            </button>
                                        )))}
                                    </div>

                                }

                                {/* {flag === true && tagValue.length > 1 ?
                                <div style={{
                                   
                                    width: '210px',
                                    height: '121px',
                                    fontFamily: 'nunito',
                                    marginTop: '245px',
                                    textAlign: 'center',
                                    borderRadius: '8px',
                                    background: '#FFFFFF',
                                    fontSize: '90%',
                                    position: 'fixed',
                                    overflow: 'auto',
                                    maxHeight: '50%',
                                    fontSize: '12px',
                                    lineHeight: '16px',

                                    scrollBehavior: 'smooth'
                                }}>
                                    {tagValue.length > 0 && (tagValue.map((mapValue, i) => (
                                        <button type="button" className='btn' style={{
                                            width: '149px',
                                            height: '32px',
                                            backgroundColor: '#FF5050',
                                            borderRadius: '4px',
                                            fontFamily: 'nunito',
                                            fontSize: '12px',
                                            fontWeight: '600',
                                            color: '#FFFFFF',
                                            textAlign: 'left',
                                            marginTop: '20px',
                                            marginLeft: '21px',
                                            marginBottom: '14px',
                                            marginRight: '40px',
                                            disabled: 'true',
                                            padding: '8px',

                                            display: 'flex', flexDirection: 'row',

                                        }}>


                                            <p style={{ fontFamily: 'nunito', fontSize: '9px', width: '85px', fontWeight: 'normal' }}>{mapValue}</p>

                                            <a><img src={threeDotLogo} alt="Canvas Logo" style={{
                                                size: '12px',
                                                marginLeft: '12px',
                                                marginRight: '12px'
                                            }} />
                                            </a>
                                            <a onClick={(e) => clickCloseIcon(e, i)}><img src={closeIcon} alt="Canvas Logo" style={{
                                                size: '12px',
                                            }} />
                                            </a>

                                        </button>
                                    )))}
                                </div>
                                : flag === true && tagValue.length === 1
                                    ? <div style={{
                                        width: '210px',
                                        height: 'auto',
                                        fontFamily: 'nunito',
                                        marginTop: '245px',
                                        textAlign: 'center',
                                        borderRadius: '8px',
                                        background: '#FFFFFF',
                                        fontSize: '90%',
                                        position: 'fixed',
                                        overflow: 'auto',
                                        maxHeight: '50%',
                                        fontSize: '12px',
                                        lineHeight: '16px',

                                        scrollBehavior: 'smooth'
                                    }}>
                                        {tagValue.length > 0 && (tagValue.map((mapValue, i) => (
                                            <button type="button" className='btn' style={{
                                                width: '149px',
                                                height: '32px',
                                                backgroundColor: '#FF5050',
                                                borderRadius: '4px',
                                                fontFamily: 'nunito',
                                                fontSize: '12px',
                                                fontWeight: '600',
                                                color: '#FFFFFF',
                                                textAlign: 'left',
                                                marginTop: '20px',
                                                marginLeft: '21px',
                                                marginBottom: '14px',
                                                marginRight: '40px',
                                                disabled: 'true',
                                                padding: '8px',

                                                display: 'flex', flexDirection: 'row',

                                            }}>


                                                <p style={{ fontFamily: 'nunito', fontSize: '9px', width: '85px', fontWeight: 'normal' }}>{mapValue}</p>

                                                <a><img src={threeDotLogo} alt="Canvas Logo" style={{
                                                    size: '12px',
                                                    marginLeft: '12px',
                                                    marginRight: '12px'
                                                }} />
                                                </a>
                                                <a onClick={(e) => clickCloseIcon(e, i)}><img src={closeIcon} alt="Canvas Logo" style={{
                                                    size: '12px',
                                                }} />
                                                </a>

                                            </button>
                                        )))}
                                    </div>

                                    : flag === false && tagValue.length == 0

                                        ? <div style={{
                                            width: '210px',
                                            height: '121px',
                                            fontFamily: 'nunito',
                                            marginTop: '63px',
                                            marginBottom: '1100000px',
                                            textAlign: 'center',
                                            borderRadius: '8px',
                                            background: 'transparent',
                                            fontSize: '90%',
                                            position: 'fixed',
                                            overflow: 'auto',
                                            maxHeight: '50%',
                                            fontSize: '12px',
                                            lineHeight: '16px',
                                        }}>
                                            {tagValue.length > 0 && (tagValue.map((mapValue, i) => (
                                                <button type="button" className='btn' style={{
                                                    width: '149px',
                                                    height: '32px',
                                                    backgroundColor: '#FF5050',
                                                    borderRadius: '4px',
                                                    fontFamily: 'nunito',
                                                    fontSize: '12px',
                                                    fontWeight: '600',
                                                    color: '#FFFFFF',
                                                    textAlign: 'left',
                                                    marginTop: '20px',
                                                    marginLeft: '21px',
                                                    marginBottom: '14px',
                                                    marginRight: '40px',
                                                    disabled: 'true',
                                                    padding: '8px',

                                                    display: 'flex', flexDirection: 'row',

                                                }}>


                                                    <p style={{ fontFamily: 'nunito', fontSize: '9px', width: '85px', fontWeight: 'normal' }}>{mapValue}</p>

                                                    <a><img src={threeDotLogo} alt="Canvas Logo" style={{
                                                        size: '12px',
                                                        marginLeft: '12px',
                                                        marginRight: '12px'
                                                    }} />
                                                    </a>
                                                    <a onClick={(e) => clickCloseIcon(e, mapValue, i)}><img src={closeIcon} alt="Canvas Logo" style={{
                                                        size: '12px',
                                                    }} />
                                                    </a>

                                                </button>
                                            )))}
                                        </div>

                                        :tagValue.length == 1  ?

                                            <div style={{
                                                width: '210px',
                                                height: 'auto',
                                                fontFamily: 'nunito',
                                                marginTop: '63px',
                                                marginBottom: '1100000px',
                                                textAlign: 'center',
                                                borderRadius: '8px',
                                                background: '#FFFFFF',
                                                fontSize: '90%',
                                                position: 'fixed',
                                                overflow: 'auto',
                                                maxHeight: '50%',
                                                fontSize: '12px',
                                                lineHeight: '16px',
                                                flexFlow: 'row wrap',

                                            }}>
                                                {tagValue.length > 0 && (tagValue.map((mapValue, i) => (
                                                    <button type="button" className='btn' style={{
                                                        width: '149px',
                                                        height: '32px',
                                                        backgroundColor: '#FF5050',
                                                        borderRadius: '4px',
                                                        fontFamily: 'nunito',
                                                        fontSize: '12px',
                                                        fontWeight: '600',
                                                        color: '#FFFFFF',
                                                        textAlign: 'left',
                                                        marginTop: '20px',
                                                        marginLeft: '21px',
                                                        marginBottom: '14px',
                                                        marginRight: '40px',
                                                        disabled: 'true',
                                                        padding: '8px',

                                                        display: 'flex', flexDirection: 'row',

                                                    }}>
                                                        <p style={{ fontFamily: 'nunito', fontSize: '9px', width: '85px', fontWeight: 'normal' }}>{mapValue}</p>

                                                        <a><img src={threeDotLogo} alt="Canvas Logo" style={{
                                                            size: '12px',
                                                            marginLeft: '12px',
                                                            marginRight: '12px'
                                                        }} />
                                                        </a>
                                                        <i class="fi fi-br-plus"></i>
                                                        <a onClick={(e) => clickCloseIcon(e, mapValue, i)}><img src={closeIcon} alt="Canvas Logo" style={{
                                                            size: '12px',
                                                        }} />
                                                        </a>

                                                    </button>
                                                )))}
                                            </div>
                                           
                                    
                                            
                                            :<div style={{
                                      
                                                width: '210px',
                                                height: '121px',
                                                fontFamily: 'nunito',
                                                marginTop: '63px',
                                                marginBottom: '1100000px',
                                                textAlign: 'center',
                                                borderRadius: '8px',
                                                background: '#transparent',
                                                fontSize: '90%',
                                                position: 'fixed',
                                                overflow: 'auto',
                                                maxHeight: '50%',
                                                fontSize: '12px',
                                                lineHeight: '16px',
                                                flexFlow: 'row wrap',

                                            }}>
                                                {tagValue.length > 0 && (tagValue.map((mapValue, i) => (
                                                    <button type="button" className='btn' style={{
                                                        width: '149px',
                                                        height: '32px',
                                                        backgroundColor: '#FF5050',
                                                        borderRadius: '4px',
                                                        fontFamily: 'nunito',
                                                        fontSize: '12px',
                                                        fontWeight: '600',
                                                        color: '#FFFFFF',
                                                        textAlign: 'left',
                                                        marginTop: '20px',
                                                        marginLeft: '21px',
                                                        marginBottom: '14px',
                                                        marginRight: '40px',
                                                        disabled: 'true',
                                                        padding: '8px',

                                                        display: 'flex', flexDirection: 'row',

                                                    }}>


                                                        <p style={{ fontFamily: 'nunito', fontSize: '9px', width: '85px', fontWeight: 'normal' }}>{mapValue}</p>

                                                        <a><img src={threeDotLogo} alt="Canvas Logo" style={{
                                                            size: '12px',
                                                            marginLeft: '12px',
                                                            marginRight: '12px'
                                                        }} />
                                                        </a>
                                                        <a onClick={(e) => clickCloseIcon(e, mapValue, i)}><img src={closeIcon} alt="Canvas Logo" style={{
                                                            size: '12px',
                                                        }} />
                                                        </a>

                                                    </button>
                                                )))}
                                            </div>
                            } */}
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}