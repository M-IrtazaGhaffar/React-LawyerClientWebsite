import React, { useState } from 'react'
import Logo from "../images/Law-logo.jpg";
import Image from "../images/MICHAL-NAVON-PIC.jpg";
import "../styles/Page.css";
import Axios from "axios";

function Page() {

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Phone, setPhone] = useState(0)
    const [Message, setMessage] = useState('')

    const submitFunc = async() => {
        const url = ''

        await Axios.post(url, {
            Name, Email, Phone, Message
        })
    }

    return (
        <>
            <div className="page">
                <div className="page-head">
                </div>
                <div className="page-logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="page-heading">
                    <h2>
                        Michal Navon
                    </h2>
                    <p>
                        Law Firm and Notary
                    </p>
                </div>
                <div className="page-contact">
                    <div className="page-btn">
                        <a href="mailto:michal@mn-law.co.il">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                            </svg>
                        </a>
                        <p>
                            Mail
                        </p>
                    </div>
                    <div className="page-btn">
                        <a href="https://api.whatsapp.com/send?phone=0774979001">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                            </svg>
                        </a>
                        <p>
                            WhatsApp
                        </p>
                    </div>
                    <div className="page-btn">
                        <a href="tel:0774979001">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                        </a>
                        <p>
                            Call the office
                        </p>
                    </div>
                    <div className="page-btn">
                        <a href="https://www.waze.com/live-map/directions?navigate=yes&to=ll.31.9808342%2C34.8096935">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                        </a>
                        <p>
                            Visit us
                        </p>
                    </div>
                    <div className="page-btn">
                        <a href="https://www.facebook.com/navonmichal/reviews">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                            </svg>
                        </a>
                        <p>
                            Recommeded
                        </p>
                    </div>
                    <div className="page-btn">
                        <a href="https://www.facebook.com/navonmichal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                        </a>
                        <p>
                            Facebook
                        </p>
                    </div>
                </div>
                <div className="page-savephone">
                    <a href="tel:0774979001">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                        </svg>
                        <p>
                            save us in your contacts
                        </p>
                    </a>
                </div>
                <div className="page-about">
                    <h3>
                        About
                    </h3>
                    <p>
                        Our firm was founded in 2010 by Adv. Michal Navon. Our firm provides a variety of legal services including representation in courts in all civil-commercial areas and among them.
                        <br />
                        <br />
                        <ul>
                            <li>
                                <span>Real estate</span> accompanies real estate transactions, including drafting sales contracts and residential, commercial and industrial leases. In addition, accompanying urban renewal projects including Tama 38, Pinui-Binui, condensation and construction, registration of rights in the Land Registry, registration of a condominium and much more.
                            </li>
                            <li>
                                Execution ofdebt collection, bankruptcies, consolidation of cases and much more.
                            </li>
                            <li>
                                <span>Commercial Law</span> Representation and ongoing legal advice to both companies and private businesses, establishment of a corporation, closure of a corporation, civil lawsuits and much more.
                            </li>
                            <li>
                                <span>Execution</span> of debt collection, bankruptcies, consolidation of cases and much more.
                            </li>
                            <li>
                                <span>Personal status</span> Drafting wills, representation and general advice in the field of inheritance law, management and handling of estates, drafting prenuptial agreements between spouses.
                            </li>
                            <br />
                            <span>
                                "Our firm was selected by the Urban Renewal Index in 2019-2020 as a leading firm in the field of urban renewal."
                            </span>
                            <br />
                            <br />
                            Our clients enjoy personal attention and individual accompaniment, and find us attentive and available for any need, at any time. We also believe in providing professional service in a family and personal atmosphere.
                        </ul>
                    </p>
                </div>
                <div className="page-boxes">
                    <div className="page-box">
                        <div>
                            <h3>Provided servives</h3>
                            <ul>
                                <li>Real Estate</li>
                                <li>Writ of Execution</li>
                                <li>Civil Litigation </li>
                                <li>Commercial Litigation</li>
                                <li>Personal status</li>
                                <li>Notary services</li>
                            </ul>
                        </div>
                    </div>
                    <div className="page-box">
                        <div>
                            <h3>Details</h3>
                            <ul>
                                <li>
                                    Phone: 0774979001
                                </li>
                                <li>
                                    Email: michal@mn-law.co.il
                                </li>
                            </ul>
                            <h3>Appointments</h3>
                            <ul>
                                <li>
                                    Sunday - Thursday
                                    <br />
                                    <span>18:00 - 09:00</span>
                                </li>
                                <li>
                                    Friday
                                    <br />
                                    <span>By Appointment</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="page-image">
                    <img src={Image} alt="image" />
                    <span>Michal Navon</span>
                </div>
                <div className="page-form">
                    <form method="post">
                    <h3>
                        Leave your details and we will get back to you
                    </h3>
                        <div>
                            <input type="number" name="phone" placeholder='Phone' required onChange={(e) => setPhone(e.target.value)}/>
                            <input type="text" name="name" placeholder='Name' required onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <input type="email" name="email" placeholder='Email' required onChange={(e) => setEmail(e.target.value)}/>
                        <textarea name="message" cols="30" rows="10" placeholder='Message' required onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button type="submit" onClick={submitFunc}>Send</button>
                    </form>
                </div>
                <div className="page-promo">
                    This Buisness Card was created by ITTI Develops.
                    <a href='https://ittidevelops.netlify.app/'>
                        Visit Us
                    </a>
                </div>
            </div>
        </>
    )
}

export default Page