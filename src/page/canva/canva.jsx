import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './canva.css';
import { IoColorPalette } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { GoGift } from "react-icons/go";
import { RiToolsLine } from "react-icons/ri";
import { GiQueenCrown } from "react-icons/gi";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoStarSharp } from "react-icons/io5";
import { FaRegHandPointRight } from "react-icons/fa6";
import { RiGraduationCapLine } from "react-icons/ri";
import { MdBusinessCenter } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { HiMiniDocumentCurrencyRupee } from "react-icons/hi2";
import { IoIosRocket } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaRegFolder } from "react-icons/fa6";
import { RiBook3Line } from "react-icons/ri";
import { GoInfinity } from "react-icons/go";
import { GiLaurelsTrophy } from "react-icons/gi";
import { GiDrippingStar } from "react-icons/gi";
const Canva = () => {
     const navigate = useNavigate();
    const canthree = ["Eye-catching social media posts",
        "YouTube thumbnails & digital graphics",
        "Flyers, posters & banners for events",
        "Creative resumes, invitations & business cards",
        "Beautiful presentations for school, work, clients",
        "Time-saving tips, tricks & templates",
        "Video editing",
        "T-shirt & product designing"];

    const firstfour = canthree.slice(0, 4);
    const secondfour = canthree.slice(4, 8);


    const fourbox = [{
        icon: <RiBook3Line />,
        title: "Beginner-to-Pro Training",
        Text: "Complete video training from basics to advanced techniques",
        color: "purple",
        backcolor: "rgb(238, 229, 229)"
    }, {
        icon: <RiComputerLine />,
        title: "Learn by Doing",
        Text: "Hands on projects with real world applications",
        color: "#DB2777",
        backcolor: "rgb(249, 205, 212)"
    }, {
        icon: <GiDrippingStar />,
        title: "+Hidden Shortculs",
        Text: "Discover time-saving Canva tricks and shortcuts",
        color: 'blue',
        backcolor: "rgb(247, 219, 224)"
    },
    {
        icon: <FaRegFolder />,
        title: "Step-by-Step Build",
        Text: "Bullo practical designs with guided Instructions",
        color: 'green',
        backcolor: "rgb(243, 202, 209)  "
    },
    {
        icon: <GoInfinity />,
        title: "Lifetime Access",
        Text: "Laam anytime, anywhere with no expiry",
        color: "goldenrod",
        backcolor: "rgb(247, 185, 195)"
    },
    {
        icon: <GiLaurelsTrophy />,
        title: "Bonus ",
        Text: "Bonus worth Rs.5000 for free",
        backcolor: "rgb(247, 219, 224)"
    }
    ];

    const canfive = [{
        icon: <RiGraduationCapLine />,
        title: "Students",
        text: "Who want creative projects and standout assignments"
    }, {
        icon: <MdBusinessCenter />,
        title: "Entrepreneurs",
        text: "Freelancers growing their brand with professional designs"
    }, {
        icon: <GiTeacher />,
        title: "Teachers",
        text: "Trainers designing engaging slides and educational posters"
    }, {
        icon: <HiMiniDocumentCurrencyRupee />,
        title: "Extra Amount",
        text: "People who want to make extra income"
    }];

    const cansix = [{
        icon: <GoGift />,
        title: "Ready-to-use Templates",
        text: "Get instant access to professional Canva templates"
    }, {
        icon: <RiToolsLine />,
        title: "Resource Pack",
        text: "Complete design hacks and resource collection"
    }];

    const caneight = [
        {
            text: "I never thought I could design! Now I make all my posts myself. Easy to follow and super useful.",
            icon: "P",
            name: "Priya",
            role: "Student"
        },
        {
            text: "This course boosted my business presence online. My brand looks more professional now.",
            icon: "R",
            name: "Rahul",
            role: "Entrepreneur"
        },
        {
            text: "I was a total beginner, but now I design posters and presentations for my college events.",
            icon: "A",
            name: "Ananya",
            role: "Student"
        },
        {
            text: "As a freelancer, Canva became my best tool after this course. My clients love the designs.",
            icon: "S",
            name: "Sandeep",
            role: "Freelancer"
        },
        {
            text: "I used to spend hours on designs, now it takes minutes. The templates and tips are gold.",
            icon: "K",
            name: "Kavya",
            role: "Designer"
        },
        {
            text: "Finally, I can create professional Instagram posts without hiring anyone!",
            icon: "M",
            name: "Meera",
            role: "Entrepreneur"
        },
        {
            text: "Loved how simple the lessons were. Now I help my friends with their resumes and flyers.",
            icon: "T",
            name: "Tarun",
            role: "Student"
        },
        {
            text: "This training made online teaching easier. My slides look engaging and creative.",
            icon: "L",
            name: "Lakshmi",
            role: "Teacher"
        },
        {
            text: "I never thought designing ads could be this fun. My shop promotions look amazing now.",
            icon: "V",
            name: "Varun",
            role: "Entrepreneur"
        },
        {
            text: "The Canva shortcuts I learned saved me so much time. Highly recommended for beginners.",
            icon: "N",
            name: "Neha",
            role: "Freelancer"
        }
    ];

    const cannine = [{
        title: "? Do I need design skills",
        text: "No! This course is made for beginners."
    },
    {
        title: "? Will I get lifetime access",
        text: " Yes- pay once and access forever"
    },
    {
        title: "? Do I need Canva Pro?",
        text: "NO- the free version is enough"
    }
    ];

    const [formData, setFormData] = useState({
        fname: "",
        email: "",
        phone: "",
        course: "Canva Pro Training"
    });

    const [isLoading, setIsLoading] = useState(false);
   

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Razorpay integration
   const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Create order
            const orderRes = await fetch("https://appsail-50033875785.development.catalystappsail.in/create-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: 1 })
            });
            const orderData = await orderRes.json();
            if (!orderData.success) {
                alert("Error creating order.");
                setIsLoading(false);
                return;
            }

            // Razorpay checkout options
            const options = {
                key: "rzp_live_gfoS1OjC8tvWjP", // Replace with your key
                amount: orderData.order.amount,
                currency: "INR",
                name: "Canva Pro Training",
                description: "Canva Course Payment",
                order_id: orderData.order.id,
                handler: async function (response) {
                    try {
                        const verifyRes = await fetch("https://appsail-50033875785.development.catalystappsail.in/verify-payment", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                ...formData,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_signature: response.razorpay_signature
                            })
                        });
                        const verifyData = await verifyRes.json();
                        setIsLoading(false);

                        if (verifyData.success) {
                            navigate(`/courselink?link=${encodeURIComponent(verifyData.receiptUrl)}`);
                        } else {
                            alert("Payment verification failed.");
                        }
                    } catch (err) {
                        console.error(err);
                        alert("Error verifying payment.");
                        setIsLoading(false);
                    }
                },
                prefill: {
                    name: formData.fname,
                    email: formData.email,
                    contact: formData.phone
                },
                theme: { color: "#3399cc" }
            };

            const rzp = new window.Razorpay(options);
            rzp.open();

        } catch (err) {
            console.error(err);
            alert("Something went wrong.");
            setIsLoading(false);
        }
    };

            //    button 

    const scrollToForm = (email = "") => {
    // Scroll to form
    const formElement = document.getElementById("form-section");
    formElement.scrollIntoView({ behavior: "smooth" });

    // Prefill email if provided
    if (email) {
        setFormData(prev => ({ ...prev, email }));
    }
};



    return (
        <div className="overallcan">

            {/* Canone  */}

            <div className="canone">

                <div className="canonebox">
                    <div className="canoneboxinner">
                        <h1> <IoColorPalette /> Learn Canva &</h1>
                        <h1>Design like a <span>Pro</span></h1>
                        <p>For Just <span>&nbsp; &#8377;499!</span></p>
                        <div className="allconebox">
                            <div className="cone-box cone-box1"><p>Lifetime Access</p> </div>
                            <div className="cone-box cone-box2"><p>Beginner Friendly</p> </div>
                            <div className="cone-box cone-box3"> <p>100% Practical Course</p> </div>
                        </div>

                        <p>Start today and create designs that impress without hiring anyone</p>
                        <button onClick={() => scrollToForm()} >Get instant Access Now For @499/-</button>
                      

                    </div>
                </div>
            </div>


            {/* Cantwo  */}

            <div className="cantwo">

                <h2>Struggling with design?</h2>
                <p>You don't need years of training or expensive software. With our Canva course, you 'll make <br />
                    Professional design in minutes even if you've never designed before.
                </p>

            </div>


            {/* Canthree  */}


            <div className="canthree">
                <div className="canthr-tlt">
                    <h1>What You'll Learn</h1>

                </div>

                <div className="canthre-cont">
                    <div className="canthre-left">
                        {
                            firstfour.map((firstfour, i) => (
                                <p key={i}><FaCheck style={{ color: "green", padding: "0px 10px" }} /> {firstfour} </p>
                            ))
                        }
                    </div>

                    <div className="canthre-right">
                        {
                            secondfour.map((secondfour, i) => (
                                <p key={i} ><FaCheck style={{ color: "green", padding: "0px 10px" }} />{secondfour} </p>
                            ))
                        }
                    </div>
                </div>

            </div>

            {/* Canfour  */}

            <div className="canfour">
                <div className="canfourtlt">
                    <h1>Course Features</h1>
                </div>

                <div className="canfour-box">
                    {
                        fourbox.map((fourbox, i) => (
                            <div key={i} className="canfourbox" id={`canfourbox${i}`} style={{ background: fourbox.backcolor }} >
                                <a style={{ color: fourbox.color }} >{fourbox.icon} </a>
                                <h2>{fourbox.title} </h2>
                                <p>{fourbox.Text} </p>
                            </div>
                        ))
                    }
                </div>

            </div>

            {/* canfive  */}

            <div className="canfive">
                <div className="canfivetitle">
                    <h1>Who Is This For?</h1>
                </div>
                <div className="canfivebox-all">
                    {canfive.map((canfive, i) => (
                        <div className="canfivebox" key={i}>
                            <div className="canfivebox-tlt">
                                <span>{canfive.icon} </span>
                                <h1>{canfive.title} </h1>
                            </div>
                            <p>{canfive.text} </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cansix  */}

            <div className="cansix">
                <h1>Exclusive Bonuses</h1>
                <div className="cansixbox-cont">
                    {cansix.map((cansix, i) => (
                        <div className="cansixbox" key={i}>
                            <h1>{cansix.icon} </h1>
                            <h3> {cansix.title} </h3>
                            <p>{cansix.text} </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Canseven  */}

            <div className="canseven">
                <h2>Price & value</h2>
                <h1>For Just  <MdCurrencyRupee />499!</h1>
                <h3>One-Time Payment</h3>
                <p><span style={{ color: "green" }} ><FaCheck /> </span> No monthly fees</p>
                <button onClick={()=>scrollToForm()} >Get instant Access Now For @499/-</button>
                <p><span style={{ color: "green" }} ><FaCheck /> </span> No expiry </p>
                <p><span style={{ color: "green" }} ><FaCheck /> </span> Learn once, use forever </p>
                <b><AiFillThunderbolt /> Limited seats at <MdCurrencyRupee />499- price may increase soon!  </b>
            </div>



            <div className="caneight">
                <div className="caneight-tlt">
                    <h1>What Students Say</h1>
                </div>
                <div className="scroll-container">
                    <div className="scroll-content">
                        {caneight.map((review, i) => (
                            <div className="caneight-box" key={i}>
                                <span>
                                    <IoStarSharp /> <IoStarSharp /> <IoStarSharp /> <IoStarSharp />{" "}
                                    <IoStarSharp />
                                </span>
                                <p>{review.text}</p>
                                <div className="canei-boxadd">
                                    <div className="canei-left">
                                        <span>{review.icon}</span>
                                    </div>
                                    <div className="canei-right">
                                        <h4>{review.name}</h4>
                                        <p>{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Duplicate for seamless infinite scroll */}
                        {caneight.map((review, i) => (
                            <div className="caneight-box" key={`dup-${i}`}>
                                <span>
                                    <IoStarSharp /> <IoStarSharp /> <IoStarSharp /> <IoStarSharp />{" "}
                                    <IoStarSharp />
                                </span>
                                <p>{review.text}</p>
                                <div className="canei-boxadd">
                                    <div className="canei-left">
                                        <span>{review.icon}</span>
                                    </div>
                                    <div className="canei-right">
                                        <h4>{review.name}</h4>
                                        <p>{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Cannine  */}

            <div className="cannine">
                <h1>FAQs</h1>
                <div className="cannine-content">
                    {cannine.map((cannine, i) => (
                        <div className="canninebox" key={i}>
                            <h2> {cannine.title} </h2>
                            <p><FaRegHandPointRight /> {cannine.text} </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Canregister  */}

            <div className="canregis" id="form-section">
                <h1>Ready to design like a pro?</h1>
                <p><IoIosRocket /> This is your chance to learn Canva once and use it forever. Enter your valid Email Id</p>

                <form onSubmit={handleSubmit}>
                    <label>Full Name</label>
                    <input type="text" name="fname" placeholder="Enter your full name" value={formData.fname} onChange={handleChange} required />
                    <label>Email Address*</label>
                    <input type="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required />
                    <label>Phone Number</label>
                    <input type="text" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
                    <button type="submit" disabled={isLoading}>{isLoading ? "Processing..." : "Access Now For ₹499/-"}</button>
                </form>
            </div>



        </div>
    )
}

export default Canva;