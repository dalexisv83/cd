# Cabling Diagram

## Overview

The Cabling Diagram tool is written using mostly [AngularJS] with [jQuery] for helper functions/IE compatibility.

It renders several dynamically drawn A/V connection diagrams filtered by DIRECTV Receiver, collocated devices and/or connection cable type.

When a diagram is chosen, a detailed view (3x) is displayed which includes instructions for connecting devices with images of the cable used in each step, and images of the rear panels of each device.

## Datasource

### Diagrams

Each diagram can be described by several attributes which are stored as JSON properties.

```json
{
  "detail":         // boolean
  "connection":     // array
  "device":         // array
  "setup":          // array - two dimensional
  "instructions":   // array
  "notes":          // array
}
```

  - **Connections**
    - Currently the tool supports:
      - HDMI
      - Component
      - 10-Pin Mini Din
      - Composite
      - S-Video
      - Coaxial
      - Digital Audio (Optical)
      - Digital Coax Audio
    - A diagram can contain any number of connections
      - The most complicated diagram uses two connection types a total of five times
    - Connections are ordered relative to the `setup` and `instruction` they are used
    - Connections are stored in the datasource as an array
      - The first index of the array corresponds to the first `instruction` in the diagram, as well as the first `setup`
        - Ex: `[2,8]` which translates to `['Component', 'Digital Coax Audio']` with the first instruction connecting two devices with a Component cable, and the second instruction connecting two devices with a Digital Coax Audio cable
  - **Devices**
    - Currently the tool supports:
      - TV
      - DIRECTV Receiver
      - VCR
      - Blu-ray/DVD player
      - Sound bar
      - Audio Receiver
    - Diagrams will always have a TV and a DIRECTV Receiver
    - A diagram can contain any number of devices
      - They are limited to four by business stakeholders
    - Each device is positioned from top to bottom
    - TV's and DIRECTV Receivers placed in positions one and two respectively and are hardcoded in the HTML View
    - Additional devices are stored in the datasource as an array
      - The first index of the array takes position three in the diagram amd so forth
        - Ex: `[2,4]` which translates to `['Blu-ray/DVD', 'Audio Receiver']` with TV in position one, DIRECTV Receiver in position two, Blu-ray/DVD in position three, and Audio Receiver in position four
  - **Setup**
    - The `setup` property describes each pair of device positions and how they are connected in a diagram
    - Each `setup` pair is stored in the datasource in a two dimensional array
      - The first dimension index corresponds to same index of the `instruction` array
      - The second dimension describes the two device positions that are being connected in that particular `instruction`
    - The device position pairings are stored as an array ordered from A/V source to destination
      - This allows Cabling Diagram to dynamically rotate the arrow for each connection accordingly
        - If the source device is physically above the destination, the arrow will point down
        - The top position in each diagram is Position One, with Position Two just below, and so on
        - If the numerical value of the source position is greater than the destination, the source device is positioned lower in the diagram, and the arrow will point upward to the destination device
        - Ex: `[[2,1], [2,3]]`
          - The first pair `[2,1]` depicts the device in position two as the source device with position one as the destination for the first instruction in the diagram
          - Because the source (position two) is physically lower in the diagram, the arrow points up toward position one
          - The second pair `[2,3]` again depicts the device in position two as the source device, however for the second instruction, position three is the destination
          - Because the source (position two) is physically higher in the diagram, the arrow points down toward position three
  - **Instructions**
  - **Notes**
  - **Detail**
    - The `detail` property is a true false flag which displays or hides the detailed view of a diagram.

### DIRECTV Receivers

### Legends