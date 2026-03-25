
<h1>
<img src="hepatoai_icon.png.png" width="55" align="center">
QS|CF–HepatoAI Platform   

<p>


</tr>
</table>

<p align="center">

![License](https://img.shields.io/badge/license-MIT-green)
![Platform](https://img.shields.io/badge/platform-Android-blue)
![Language](https://img.shields.io/badge/code-HTML%20CSS%20JavaScript-orange)
![Status](https://img.shields.io/badge/status-Research%20Prototype-purple)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.xxxxxxx.svg)](https://doi.org/10.5281/zenodo.19055514)
![Version](https://img.shields.io/badge/version-v1.0-brightgreen)


</p>

## What is HepatoAI?

**HepatoAI** is a lightweight electroanalytical decision-support platform developed to translate experimentally derived calibration relationships of the QS|CF microsensor into a deployable digital diagnostic interface. The platform enables rapid interpretation of electrochemical signals for therapeutic drug monitoring of hepatotoxic drugs including **acetaminophen (APAP)** and **diclofenac (DCF)**.

HepatoAI converts chronoamperometric current responses obtained from the QS|CF microsensor into **quantitative drug concentrations and clinically interpretable outputs**. By embedding experimentally validated calibration equations within a computational framework, the platform provides **real-time concentration estimation and classification into therapeutic, low, or elevated ranges**, enabling rapid analytical interpretation without manual post-processing.

---

# Key Features

• Real-time electrochemical signal interpretation  
• Automated conversion of current (µA) to drug concentration (µM)  
• Clinically interpretable outputs (therapeutic / low / elevated)  
• Lightweight smartphone-compatible analytical interface  
• Deterministic analytical engine based on experimental calibration  
• AI-assisted prompt-to-code development workflow  

---

# Analytical Framework

HepatoAI operates using experimentally derived calibration relationships obtained from **chronoamperometric measurements of the QS|CF microsensor in diluted serum environments**.

### Acetaminophen (APAP)
I = 0.05973C + 0.2934

### Diclofenac (DCF)
I = 0.00467C + 0.23693

Where:

- **I** = measured current (µA)  
- **C** = analyte concentration (µM)

The application determines concentration using the inverse calibration transformation:
C = (I − b) / m


This deterministic computation removes the need for runtime regression fitting and ensures full consistency with the **experimentally validated electroanalytical calibration model**.

---

# Development Workflow

HepatoAI was developed through an **AI-assisted iterative prototyping workflow** in which the electroanalytical logic of the QS|CF sensing platform was progressively translated into executable software architecture.
The development process involved successive **prompt–refinement cycles using ChatGPT**, where sensing logic, calibration equations, and analytical computation were systematically converted into modular code segments. These modules were integrated to construct the final application using **HTML, CSS, and JavaScript**.
Interface prototyping, debugging, and real-time logic testing were performed using **CodePen**, allowing rapid validation of signal input handling, concentration calculation, and clinical classification logic prior to deployment.
The finalized codebase was subsequently packaged into a **smartphone-installable application format**, enabling portable diagnostic deployment and real-time analytical interpretation.

---

# Installation (Android App)

A **smartphone-installable version of HepatoAI** is available for portable use.

Download APK:

[https://drive.google.com/drive/folders/1CK7roDlVOYhTZ74vD00tHLvs1MTFkjXA?usp=drive_link]

### Installation Steps

1. Download the HepatoAI APK file  
2. Enable **"Install from Unknown Sources"** on Android devices  
3. Install the application  
4. Launch HepatoAI and input measured current values from the QS|CF microsensor  

---
## Usage

The integrated operational workflow of the **QS|CF–HepatoAI platform** is illustrated below, demonstrating the seamless coupling of electrochemical sensing, signal acquisition, and real-time clinical decision support.

<p align="center">
  <img src="https://github.com/hm4744/QS-CF-HepatoAI/blob/main/illustration.svg" width="100%" style="max-width:1000px;">
</p>

### Operational Workflow

1. **Sample Acquisition and Serum Extraction**  
   Biological samples are collected, followed by serum separation for electrochemical analysis.

2. **Sample Preparation**  
   The extracted serum is diluted in an appropriate buffer system to ensure electrochemical compatibility and signal stability.

3. **Electrochemical Signal Generation**  
   The prepared sample is analyzed using the **QS|CF microsensor** interfaced with a potentiostat, where chronoamperometric current responses are recorded.

4. **Signal Transmission and Data Handling**  
   The acquired current signal is transferred to the HepatoAI interface for computational processing.

5. **Deterministic Concentration Estimation**  
   Embedded calibration models convert the measured current (µA) into quantitative analyte concentrations (µM).

6. **Automated Clinical Classification**  
   The calculated concentrations are categorized into clinically relevant ranges:
   - Therapeutic  
   - Low  
   - Elevated  

7. **Real-Time Decision Support Output**  
   The final interpreted result is displayed through a user-friendly interface, enabling rapid analytical interpretation and facilitating clinical decision-making.

---

### User Interaction

1. Record current using the QS|CF microsensor  
2. Input the measured current into HepatoAI  
3. Select analyte of need (APAP or DCF)  
4. Obtain instantaneous concentration and clinical classification  

---
### Notes

- Ensure calibration conditions match those used in the embedded model  
- Applicable for serum-based electrochemical measurements  
- Designed for research and prototype-level diagnostic interpretation  

---

# Live Prototype

Interactive prototype available on CodePen:

https://codepen.io/Aashik-Mohammed/pen/ZYONpvr

---

# HepatoAI Interface Preview

![HepatoAI Interface](interface.png)


# Code Availability

The source code for the **HepatoAI digital diagnostic platform** is openly available to support transparency, reproducibility, and further development of electrochemical sensing software tools.

GitHub Repository  
https://github.com/hm4744/QS-CF-HepatoAI-.git

The repository contains the complete implementation of the HepatoAI analytical engine including the **HTML interface, CSS styling framework, and JavaScript-based computational logic** used for electroanalytical signal interpretation.

---

# Citation

If you use HepatoAI or its analytical framework in your research, please cite the associated publication describing the **QS|CF microsensor platform and HepatoAI diagnostic interface**.

---

# License

This project is distributed under the open-source license included in this repository.

---

# Contact

For research collaboration or technical inquiries:

Mohamed Hefayathullah

Materials Electrochemistry Laboratory, SRMIST-KTR, India

Email: hm4744@srmist.edu.in [Google scholar](https://scholar.google.com/citations?user=kK1wknAAAAAJ&hl=en)


