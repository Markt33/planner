import React from 'react';

export default function Main() {
    const [sub, setSub] = React.useState(false);
    const classNames = [
        'Math97', 'ENG101', 'Lab Science', 'SDEV106', 'ENG 126, 127, 128 or 235',
        'SDEV101', 'MATH141 or 147', 'CMST210, 220, 230 or 238', 'MATH146 or 256',
        'CS108', 'SDEV117', 'SDEV201', 'SDEV121', 'SDEV218', 'SDEV219', 'SDEV220', 'SDEV280'
    ];

    const [formData, setFormData] = React.useState({
        classPreQ: ""
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

    function handleSubmit(e) {
        e.preventDefault();
        changeSubmit();
    }

    const distributeClasses = () => {
        const classesPerQuarter = formData.classPreQ;
        const totalClasses = classNames.length;
        const totalQuarters = Math.ceil(totalClasses / classesPerQuarter);

        const distributedClasses = Array.from({ length: totalQuarters }, (_, i) =>
            classNames.slice(i * classesPerQuarter, (i + 1) * classesPerQuarter)
        );

        return distributedClasses;
    };

    return (
        <main className='main'>
            {!sub && (
                <div>
                    <form className='form' onSubmit={handleSubmit}>
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
                        <button>Submit</button>
                    </form>
                </div>
            )}

                {sub && (
                    <div className='contain'>
                        
                        {distributeClasses().map((quarter, index) => (
                            <div key={index} className="class-card">
                                <h3>Quarter {index + 1}</h3>
                                <ul>
                                    {quarter.map((className, i) => (
                                        <li key={i}>{className}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
        </main>
    );
}
