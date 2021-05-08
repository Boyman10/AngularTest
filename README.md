# TestProject

Added bootstrap 4
Added rxjs-compat

# Using Angular Cli

1. generate component :

> ng g c comp-name
CREATE src/app/device/device.component.scss (0 bytes)
CREATE src/app/device/device.component.html (21 bytes)
CREATE src/app/device/device.component.ts (276 bytes)
UPDATE src/app/app.module.ts (571 bytes)

# glossary

## From code toward template

1. interpolation 
   
-> send data from ts -> template

syntaxe : {{ }}

2. Property binding

-> other way of dynamic linking from code to template.

syntaxe : [] 

ex : [disabled]="isAuth"

## From template to TS

1. Event binding
Syntaxe : ()
   
ex : click on element from the DOM -> (click)=onTurnOn()

Good practice naming : *on*Action

## Both direction : 2-way binding

1. FormsModule

syntaxe : [()]
ngModel


## Custom prop 

ex : from parent to children.
@Input()


# Directives

-> instructions

## Structure directives
-> modify structure of document

syntaxe : tell Angular to take care of structural directives with the *

ex : *ngIf
*ngFor

## Attribute directives

ex: ngModel

ngStyle
ngClass


# Pipe
Provided by Angular 
data as input -> transform -> display

ex : date, uppercase, async

Can chain them.

# Services

centralize functionalities which can be used among the app.
Need to inject a service (usually inside constructor)
3 levels of injections

Needs to be added within providers []


## App module injection 
-> available everywhere !

## App component
-> available for all components but not other services

## Component


# Routing

SPA (single page application)
<router-outlet></router-outlet> 
within main component

Order in route paths matters !!

## Example with Authentication component
> ng g c auth
> ngg c device-view

## Router links - navigation

routerLink instead of href

## Guard
-> filter for our routes to set up on a service.

# Observable

Rxjs/Rx for the methods 

## Good practice 

1. use a Subscription object to control the observable.
2. Apply another level of abstraction using a *subject*
ex: device service


# Operator

between observable & subscription

ex: map, filter, throttleTime (delay mini), scan, reduce


# Forms

## Template

needs that : (ngSubmit)="onSubmit(f)" 

And its local reference : #f="ngForm"   refer the dom element from the DOM

And within inputs : add *ngModel* directive -> register this control onto angular

## Reactive

FormBuilder -> create FormGroup


# HTTPCLIENT


# STRUCTURE

ng g c auth/signup
ng g c auth/signup
..

auth/
book-list/
...
services/
models/
