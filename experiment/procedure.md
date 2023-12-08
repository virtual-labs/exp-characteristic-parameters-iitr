
### **A. Measurement of Input Bias Current I<sub>B</sub>**

#### Familiarise with components

<div style="text-align:center">  

![](images/board.png "Breadboard")&emsp;![](images/supply.png "Power Supply")&nbsp;&nbsp;&nbsp;&nbsp; ![](images/multimeter.png "Multimeter")&nbsp;&nbsp;&nbsp;&nbsp; ![](images/IC.png "IC 741")&nbsp;&nbsp;&nbsp;&nbsp; ![](images/capacitor1.png "Capacitor(C1)")&nbsp;&nbsp;&nbsp;&nbsp; ![](images/capacitor2.png "Capacitor(C2)")&nbsp;&nbsp;&nbsp;&nbsp; ![](images/resistance.png "470KΩ(Resistor)")&nbsp;&nbsp;&nbsp;&nbsp; ![](images/resistance1.png "470KΩ(Resistor)")  

**Fig 1: Components**  </div>

#### **a) Measurement of inverting bias current I<sub>B1</sub>**

**1.** Click on the components button to place the component on the table.  

**2.** Make connections as per the circuit diagram or connection table.  
<center>

![](images/image1ins.png)

**Fig 2: Circuit diagram to measure inverting bias current.** 

**Table 1: Connection table to measure inverting bias current.**

![](images/Table1.1.png)
</center>

**3.** Click on **'Check Connection'** button to check connections. If correct, Click on **'Show output voltage'** button to view output on DMM.  
**4.** Calculate the inverting bias current using the formula:  

<div style="text-align:center"> 

**I<sub>B1</sub> = V<sub>o</sub>/R<sub>f</sub>** </div>
 

**5.** Click on **'Result'** button and enter the claculated value.  
**6.** Click on **'Reset'** button and proceed in the same way to calculate the input bias current at non-inverting terminal.

  
  

#### **b) Measurement of non-inverting bias current I<sub>B2</sub>**

**1.** Click on the components button to place the component on the table.  

**2.** Make connections as per the circuit diagram or connection table.  

<div style="text-align:center">

![](images/image2ins.png) 

**Fig 3: Circuit diagram to measure non-inverting bias current.**

**Table 2: Connection table to measure non-inverting bias current.**

![](images/Table1.2.png)
</div>
  

**3.** Click on **'Check Connection'** button to check connections. If correct, Click on **'Show output voltage'** button to view output on DMM.  
**4.** Calculate the non-inverting bias current using the formula:  
<div style="text-align:center">

**I<sub>B2</sub> = V<sub>o</sub>/R<sub>1</sub>** </div>

**5.** Click on **'Result'** button and enter the claculated value.  
**6.** The input bias current I<sub>B</sub> hence, can be calculated using the formula:  
<div style="text-align:center">  

**I<sub>B</sub> = (I<sub>B1</sub> + I<sub>B2</sub>)/2** </div>

where, I<sub>B1</sub> has to be calculated from previous part.  
  

### **B. Measurement of input offset current I<sub>io</sub>**

**1.** Click on the components button to place the component on the table.  

**2.** Make connections as per the circuit diagram or connection table.  

<div style="text-align:center">

![](images/image3ins.png)

**Fig 4: Circuit diagram to measure input offset current.**

**Table 3: Connection table to measure input offset current.**

![](images/Table2.png)
</div>
  

**3.** Click on **'Check Connection'** button to check connections. If correct, Click on **'Show output voltage'** button to view output on DMM.  
**4.** Calculate the input offset current using the formula:  
<div style="text-align:center">

**I<sub>io</sub> = V<sub>o</sub>/R<sub>f</sub>** </div>

**5.** Click on **'Result'** button and enter the claculated value.  
  

### **C. Measurement of input offset voltage V<sub>io</sub>**

**1.** Click on the components button to place the component on the table.  

 <div style="text-align:center">

![](images/board.png "Breadboard")&emsp; ![](images/supply.png "Supply")&emsp; ![](images/multimeter.png "Multimeter")&emsp; ![](images/IC.png "IC")&emsp; ![](images/capacitor1.png "Capacitor(C1)")&emsp; ![](images/resistance3.1.png "100Ω(Resistor)")&emsp; ![](images/resistance3.2.png "100Ω(Resistor)")&emsp; ![](images/resistance3.png "10kΩ(Resistor)")  

**Fig 5: Components**  </div>

**2.** Make connections as per the circuit diagram or connection table.  
<div style="text-align:center">

![](images/image4ins.png) 

**Fig 6: Circuit diagram to measure input offset voltage.**

**Table 4: Connection table to measure input offset voltage.**

![](images/Table3.png)

</div>
  

**3.** Click on **'Check Connection'** button to check connections. If correct, Click on **'Show output voltage'** button to view output (**V<sub>o</sub>**) on DMM.    
**4.** Calculate the input offset voltage, **V<sub>io</sub>** using the formula:   
<div style="text-align:center">

**V<sub>io</sub>** = (V<sub>o</sub> - I<sub>io</sub>R<sub>f</sub>)/(1+R<sub>f</sub>/R<sub>i</sub>)</div>

**5.** Click on **'Result'** button and enter the claculated value.  
  

### **D. Measurement of slew rate S.R.**

**1.** Click on the components button to place the component on the table.  

<div style="text-align:center">  

![](images/board.png "Breadboard")&emsp; ![](images/supply.png "Supply")&emsp; ![](images/IC.png "IC")&emsp; ![](images/CRO.png "CRO")&emsp; ![](images/generator.png "Function generator")&emsp; ![](images/resistance4.png "10KΩ(Resistor)")  

**Fig 7: Components** </div>

**2.** Make connections as per the circuit diagram or connection table.  
<div style="text-align:center">

![](images/image5ins.png)

**Fig 8: Circuit diagram to measure slew rate.**

**Table 5: Connection table to measure slew rate.**

![](images/Table4.png)
</div>
  
  
**3.** The **input signal\*** has to be taken from the red terminal of A.F. Oscillator while the other terminal has to be grounded.  
**4.** Also, feed the input signal to channel CH1 of the C.R.O and the output from Op-Amp IC must be fed to the channel CH2.  
**5.** Click on **'Check Connection'** button to check connections. If correct, Click on **'Show output voltage'** button to view output.  
**6.** Increase the frequency of input signal using the dial\*\* on A.F. Oscillator until output wave becomes triangular. This is the required frequency **f<sub>max</sub>** in KHz.  
**7.** Calculate the slew rate using the formula:  
<div style="text-align:center"> 

**S.R. = 2πf<sub>max</sub>V<sub>m</sub>/10<sup>6</sup>   V/μs**</div>
**8.** Click on **'Result'** button and enter the calculated value.  
  
\*Amplitude of input signal 'V<sub>m</sub>' is 3V.  
\*\* dial can be controlled through both mouse and keyboard.

 
