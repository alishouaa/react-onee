import React from "react";
import './TodoItems.css'

//إستقبال البيانات و دالّة الحذف من الصفحة الرئيسية و حفظها داخل متغيّر من اجل استخدامها
const TodoItems = (props) => {

    const { items, deleteItems } = props;
    
    // عند إفراغ المصفوفة من البيانات اطبع لي " لا يوجد بيانات" لعرضها

    let length = items.length;

    const ListItems = length ? (
        
        items.map(item => {

            // بعد جلب البيانات اطبعهم هُنا و من ثمّ اطبعهم في الاسفل

            return (
                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick={() => deleteItems(item.id)}>&times;</span>

                </div>
            )
        })
    ) : <p>ther is no item to show</p>

    return (
        <div className="ListItems">
            <span className="name title">name</span>
            <span className="age title">age</span>
            <span className="action title">action</span>

            {ListItems}
        </div>
    )
}

export default TodoItems