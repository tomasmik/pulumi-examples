"use strict";

const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");

// create a new security group for port 80
let group = new aws.ec2.SecurityGroup("web-secgrp1", {
    ingress: [
        { protocol: "tcp", fromPort: 22, toPort: 22, cidrBlocks: ["0.0.0.0/0"] },
        { protocol: "tcp", fromPort: 80, toPort: 80, cidrBlocks: ["0.0.0.0/0"] },
    ],
}, { aliases: [{ name: "new-web-secgrp" }] });

// create a new security group for port 80
let group2 = new aws.ec2.SecurityGroup("web-secgrp2", {
    ingress: [
        { protocol: "tcp", fromPort: 22, toPort: 22, cidrBlocks: ["0.0.0.0/0"] },
        { protocol: "tcp", fromPort: 80, toPort: 80, cidrBlocks: ["0.0.0.0/0"] },
    ],
}, { parent: group });

// create a new security group for port 80
let group3 = new aws.ec2.SecurityGroup("web-secgrp3", {
    ingress: [
        { protocol: "tcp", fromPort: 22, toPort: 22, cidrBlocks: ["0.0.0.0/0"] },
        { protocol: "tcp", fromPort: 80, toPort: 80, cidrBlocks: ["0.0.0.0/0"] },
    ],
}, { parent: group });

// create a new security group for port 80
let group4 = new aws.ec2.SecurityGroup("web-secgrp4", {
    ingress: [
        { protocol: "tcp", fromPort: 22, toPort: 22, cidrBlocks: ["0.0.0.0/0"] },
        { protocol: "tcp", fromPort: 80, toPort: 80, cidrBlocks: ["0.0.0.0/0"] },
    ],
});

// create a new security group for port 80
let group5 = new aws.ec2.SecurityGroup("web-secgrp5", {
    ingress: [
        { protocol: "tcp", fromPort: 22, toPort: 22, cidrBlocks: ["0.0.0.0/0"] },
        { protocol: "tcp", fromPort: 80, toPort: 80, cidrBlocks: ["0.0.0.0/0"] },
    ],
}, { parent: group4 });
