import React from 'react';

export default function Main() {
    const [sub, setSub] = React.useState(false);

    const classNames = [
        'Math97', 'ENG101', 'Lab Science', 'SDEV106', 'ENG 126, 127, 128 or 235',
        'SDEV101', 'MATH141 or 147', 'CMST210, 220, 230 or 238', 'MATH146 or 256',
        'CS108', 'SDEV117', 'SDEV201', 'SDEV121', 'SDEV218', 'SDEV219', 'SDEV220', 'SDEV280'
    ];

    const quarter = [
        'Fall', 'Winter', 'Spring', 'Summer'
    ];

    const [formData, setFormData] = React.useState({
        classPreQ: "",
        summer: false,
        summerPreQ: "",
        classStart: ""
    });

    function changeSubmit() {
        setSub(true);
    }

    function handleChange(e) {
        const { value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            classPreQ: value
        }));
    }

    function handleSummerChange(e){
        const {value} = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            summer: !prevFormData.summer
        }))    
    }

    function handleSubmit(e) {
        e.preventDefault();
        changeSubmit();
        console.log(formData.summer)

    }

    function handleSummerPreQChange(e) {
        const { value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            summerPreQ: value
        }));
    }

    const divideClasses = () => {
        const classesToTake = formData.classPerQ; //3
        const summerClass = formData.summerPreQ; //1
        const totalClasses = classNames.length; //17

        const dividedArray = [];
        

        for(let i = 0; i < totalClasses; i++){
            dividedArray.push(classNames[i]);
        }

        console.log(dividedArray)
        return dividedArray;
    }

    function handleStartChange(e) {
        const { value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            classStart: value
        }));
    }

    return (
        <main className='main'>
            {!sub && (
                <div>
                    <form className='form' onSubmit={handleSubmit}>
                        <label htmlFor='classStart'>Which quarter will you start in?</label>
                        <select
                            id='classStart'
                            value={formData.classStart}
                            onChange={handleStartChange}
                        >
                            <option>-- Choose --</option>
                            <option value={"Fall"}>Fall</option>
                            <option value={"Winter"}>Winter</option>
                            <option value={"Spring"}>Spring</option>
                            <option value={"Summer"}>Summer</option>
                        </select>

                        <label htmlFor='classPreQ'>How many classes will you be taking per quarter?</label>
                        <select
                            id='classPreQ'
                            value={formData.classPreQ}
                            onChange={handleChange}
                        >
                            <option>-- Choose --</option>
                            <option value={1}>1 Class</option>
                            <option value={2}>2 Classes</option>
                            <option value={3}>3 Classes</option>
                        </select>

                        <label htmlFor='summer'>
                            Will you be taking summer classes?
                            <input 
                            type='checkbox'
                            onChange={handleSummerChange}
                            />
                        </label>
                        {formData.summer && 
                        <div>
                            <label htmlFor='summerPreQ'>How many classes will you be taking for the summer?</label>
                            <select
                                id='summerPreQ'
                                value={formData.summerPreQ}
                                onChange={handleSummerPreQChange}
                            >
                                <option>-- Choose --</option>
                                <option value={1}>1 Class</option>
                                <option value={2}>2 Classes</option>
                            </select>   
                        </div>}

                        <button>Submit</button>
                    </form>
                </div>
            )}
                {sub && (
                    <div className='contain'>
                        {divideClasses().map((quarter, index) =>(
                            <div key={index}>
                                {quarter}
                            </div>
                        ))}
                    </div>
                )}
        </main>
    );
}
