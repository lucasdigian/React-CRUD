import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

function changeValues(trigger){
	trigger.change(function(){
    switch($(trigger).val()){
    case '1':
        changeList(step1)
        break
    case '2':
        changeList(step2)
        break
    case '3':
        changeList(step3)
        break
    case '4':
        changeList(step4)
        break
    case '5':
        changeList(step5)
        $('.hide-option5').hide()
        break
}
})
}