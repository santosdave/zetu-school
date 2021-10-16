import React from 'react';
import TextInputGroup from "../components/input/inputDefinitions/TextInputGroup";
import TextSelectGroup from "../components/input/inputDefinitions/TextSelectGroup";
import "bootstrap/dist/css/bootstrap.min.css";
function StudentSignUp() {
    return (
        <div style={{marginTop:20}}>
            <center>
                <div className="card mb-3" style={{width: "700px"}}>
                    <div style={{width: "700px", overflow: "hidden", overflowY: "auto",}}>
                        <div className="card-header">
                            <b> Student Registration</b>
                        </div>
                        <div className="card-header-pills">
                            <b> Please enter full information and click submit</b>
                        </div>
                        <div className="çard-body">
                            <form>
                            <TextInputGroup
                                        label="Full Name"
                                        name="studentName"
                                        placeholder=" Full Name"
                                       /*  value={this.state.studentName}
                                        onChange={this.onChangeStudentName}
                                        error={errors.studentName} */
                                    />
                                    <TextInputGroup
                                        label="Date of Birth"
                                        name="dateOfBirth"
                                        placeholder=" Date of Birth"
                                        type="date"
                                        /* value={this.state.dateOfBirth}
                                        onChange={this.onChangeDateOfBirth}
                                        error={errors.dateOfBirth} */
                                    />
                                    <TextInputGroup
                                        label="Date of Admission"
                                        name="dateOfAdmission"
                                        placeholder=" Date of Admission"
                                        type="date"
                                        /* value={this.state.dateOfAdmission}
                                        onChange={this.onChangeDateOfAdmission}
                                        error={errors.dateOfAdmission} */
                                    />
                                    <TextInputGroup
                                        label="Admission Number"
                                        name="admissionNo"
                                        placeholder=" Admission Number"
                                        /* value={this.state.admissionNo}
                                        onChange={this.onChangeAdmissionNo}
                                        error={errors.admissionNo} */
                                    />
                                    <TextInputGroup
                                        label="Email"
                                        name="email"
                                        placeholder=" Email"
                                        type="email"
                                        /* value={this.state.email}
                                        onChange={this.onChangeEmail}
                                        error={errors.email} */
                                    />
                                    <TextInputGroup
                                        label="Password"
                                        name="password"
                                        type="password"
                                        placeholder=" Password"
                                        /* value={this.state.password}
                                        onChange={this.onChangePassword}
                                        error={errors.password} */
                                    />
                                    <TextInputGroup
                                        label="Current Class"
                                        name="currentClass"
                                        placeholder=" Current Class"
                                       /*  value={this.state.currentClass}
                                        onChange={this.onChangeCurrentClass}
                                        error={errors.currentClass} */
                                    />
                                    <TextSelectGroup
                                        label="House"
                                        name="house"
                                        /* options={this.houseOptions} */
                                        placeholder=" House"
                                        /* value={this.state.house}
                                        onChange={this.onChangeHouse}
                                        error={errors.house} */
                                    />
                                    <TextSelectGroup
                                        label="Mode of Transport"
                                        name="modeOfTransport"
                                       /*  options={this.transportOptions} */
                                        placeholder=" Mode of Transport"
                                        /* value={this.state.transport}
                                        onChange={this.onChangeTransport}
                                        error={errors.transport} */
                                    />
                                    <TextInputGroup
                                        label="Allergies"
                                        name="allergies"
                                        placeholder=" Allergies"
                                       /*  value={this.state.allergies}
                                        onChange={this.onChangeAllergies}
                                        error={errors.allergies} */
                                    />
                                    <div className="card-title">
                                        <b> Particulars of Parents/Guardian</b>
                                    </div>
                                    <TextInputGroup
                                        label="Home Address"
                                        name="address"
                                        placeholder=" Home Address"
                                        /* value={this.state.address}
                                        onChange={this.onChangeAddress}
                                        error={errors.address} */
                                    />
                                    <div className="card-subtitle">
                                        <b> Father Details</b>
                                    </div>
                                    <TextInputGroup
                                        label="Father's Name"
                                        name="fatherName"
                                        placeholder=" Father's Name"
                                        /* value={this.state.fatherName}
                                        onChange={this.onChangeFatherName}
                                        error={errors.fatherName} */
                                    />
                                    <TextInputGroup
                                        label="Father's Occupation"
                                        name="fatherOccupation"
                                        placeholder=" Father's Occupation"
                                        /* value={this.state.fatherOccupation}
                                        onChange={this.onChangeFatherOccupation}
                                        error={errors.fatherOccupation} */
                                    />
                                    <TextInputGroup
                                        label="Father's Telephone"
                                        name="fatherTelephone"
                                        placeholder=" Father's Telephone"
                                       /*  value={this.state.fatherTelephone}
                                        onChange={this.onChangeFatherTelephone}
                                        error={errors.fatherTelephone} */
                                    />
                                    <TextInputGroup
                                        label="Father's Email"
                                        name="fatherEmail"
                                        placeholder=" Father's Email"
                                        /* value={this.state.fatherEmail}
                                        onChange={this.onChangeFatherEmail}
                                        error={errors.fatherEmail} */
                                    />
                                    <div className="card-subtitle">
                                        <b> Mother Details</b>
                                    </div>
                                    <TextInputGroup
                                        label="Mother's Name"
                                        name="motherName"
                                        placeholder=" Mother's Name"
                                       /*  value={this.state.motherName}
                                        onChange={this.onChangeMotherName}
                                        error={errors.motherName} */
                                    />
                                    <TextInputGroup
                                        label="Mother's Occupation"
                                        name="motherOccupation"
                                        placeholder=" Mother's Occupation"
                                        /* value={this.state.motherOccupation}
                                        onChange={this.onChangeMotherOccupation}
                                        error={errors.motherOccupation} */
                                    />
                                    <TextInputGroup
                                        label="Mother's Telephone"
                                        name="motherTelephone"
                                        placeholder=" Mother's Telephone"
                                        /* value={this.state.motherTelephone}
                                        onChange={this.onChangeMotherTelephone}
                                        error={errors.motherTelephone} */
                                    />
                                    <TextInputGroup
                                        label="Mother's Email"
                                        name="motherEmail"
                                        placeholder=" Mother's Email"
                                        /* value={this.state.motherEmail}
                                        onChange={this.onChangeMotherEmail}
                                        error={errors.motherEmail} */
                                    />
                                    <div className="card-subtitle">
                                        <b> Guardian Details</b>
                                    </div>
                                    <TextInputGroup
                                        label="Guardian's Name"
                                        name="guardianName"
                                        placeholder=" Guardian's Name"
                                        /* value={this.state.guardianName}
                                        onChange={this.onChangeGuardianName}
                                        error={errors.guardianName} */
                                    />
                                    <TextInputGroup
                                        label="Guardian's Occupation"
                                        name="guardianOccupation"
                                        placeholder=" Guardian's Occupation"
                                       /*  value={this.state.guardianOccupation}
                                        onChange={this.onChangeGuardianOccupation}
                                        error={errors.guardianOccupation} */
                                    />
                                    <TextInputGroup
                                        label="Guardian's Telephone"
                                        name="guardianTelephone"
                                        placeholder=" Guardian's Telephone"
                                        /* value={this.state.guardianTelephone}
                                        onChange={this.onChangeGuardianTelephone}
                                        error={errors.guardianTelephone} */
                                    />
                                    <TextInputGroup
                                        label="Guardian's Email"
                                        name="guardianEmail"
                                        placeholder=" Guardian's Email"
                                        /* value={this.state.guardianEmail}
                                        onChange={this.onChangeGuardianEmail}
                                        error={errors.guardianEmail} */
                                    />
                            </form>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default StudentSignUp
