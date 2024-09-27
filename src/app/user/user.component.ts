import { Component , OnInit , AfterViewInit , ContentChild ,
 ElementRef , Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUser } from '../Users-Interface';
import $ from 'jquery';

@Component ({
	selector : 'users' , 
	standalone : true ,
	imports : [FormsModule] ,
	templateUrl : './user.component.html',
	styleUrl : 'user.component.css',
})
 
export class UserComponent implements OnInit, AfterViewInit {

	private _user!:IUser;
	@Input() 
	set user(user: IUser){
		this._user = user;
	}
	get user():IUser{
		return this._user;
	} 
	
	name: string = "Users";
	disabled: boolean = true;
	disableStatus: string = "enable";
	nameValue: string = '';
	text: string = '';
	userWelcome: string = '';
	@ContentChild('textToSuccess',{static:true}) textToSuccess:any;

	ngOnInit():void {
		$('label').click(function(){
			$(this).text('Hello!').addClass('btn').addClass('btn-danger');
		})
		
	}

	onClick(){
		this.disableStatus == 'enable' ? 
		this.disableStatus = 'disable' : 
		this.disableStatus = 'enable';

		this.disabled ? this.disabled = false : this.disabled = true ;
	}

	public ngAfterViewInit():void {
		console.log(this.textToSuccess);
	}

	labelClicked(){
		console.log("From User Component - private : " +this._user.name);
	}

	keyUped(){
		this.userWelcome === "" ?
		this.name = "Dear Users" :
		this.name = this.userWelcome;
	}
}