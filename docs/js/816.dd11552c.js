"use strict";(self["webpackChunkvue_test_task"]=self["webpackChunkvue_test_task"]||[]).push([[816],{5816:function(t,e,s){s.r(e),s.d(e,{default:function(){return _}});var i=s(3396),a=s(7139),r=s(9242);const d={class:"row"},n={key:0,class:"col s6 offset-s3"},l={class:"input-field"},o=(0,i._)("label",{for:"description"},"Описание",-1),u={class:"character-counter",style:{float:"right","font-size":"12px"}},c={type:"text",ref:"datepicker"},p={key:0},h=(0,i._)("button",{class:"btn",type:"submit",style:{"margin-right":"1rem"}},"Обновить",-1),k={key:1};function m(t,e,s,m,y,f){return(0,i.wg)(),(0,i.iD)("div",d,[f.task?((0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("h1",null,(0,a.zw)(f.task.title),1),(0,i._)("form",{onSubmit:e[3]||(e[3]=(0,r.iM)(((...t)=>f.submitHandler&&f.submitHandler(...t)),["prevent"]))},[(0,i._)("div",l,[(0,i.wy)((0,i._)("textarea",{style:{"min-height":"150px"},"onUpdate:modelValue":e[0]||(e[0]=e=>t.description=e),id:"description",class:"materialize-textarea"},null,512),[[r.nr,t.description]]),o,(0,i._)("span",u,(0,a.zw)(t.description.length)+"/2048",1)]),(0,i._)("input",c,null,512),"completed"!==f.task.status?((0,i.wg)(),(0,i.iD)("div",p,[h,(0,i._)("button",{class:"btn blue",type:"button",style:{"margin-right":"1rem"},onClick:e[1]||(e[1]=(...t)=>f.completeTask&&f.completeTask(...t))},"Завершить задачу"),(0,i._)("button",{class:"btn red",type:"button",onClick:e[2]||(e[2]=(...t)=>f.deleteTask&&f.deleteTask(...t))},"Удалить задачу")])):(0,i.kq)("",!0)],32)])):((0,i.wg)(),(0,i.iD)("p",k,"Задач нет"))])}var y={computed:{task(){return this.$store.getters.taskById(+this.$route.params.id)}},data:()=>({description:"",date:null}),mounted(){this.description=this.task.description,this.date=M.Datepicker.init(this.$refs.datepicker,{format:"dd.mm.yyyy",defaultDate:new Date(this.task.date),setDefaultDate:!0}),setTimeout((()=>{M.updateTextFields()}),0)},methods:{submitHandler(){this.$store.dispatch("updateTask",{id:this.task.id,description:this.description,date:this.date.date}),this.$router.push("/list")},completeTask(){this.$store.dispatch("completeTask",this.task.id),this.$router.push("/list")},deleteTask(){this.$store.dispatch("deleteTask",this.task.id),this.$router.push("/list")}},destroyed(){this.date&&this.date.destroy&&this.date.destroy()}},f=s(89);const b=(0,f.Z)(y,[["render",m]]);var _=b}}]);
//# sourceMappingURL=816.dd11552c.js.map