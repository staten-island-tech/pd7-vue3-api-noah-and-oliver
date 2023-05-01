<!-- <template>
  <div class="cards">
    <Card
      v-for="person in persons"
      :key="person._311sr_number"
      :borough="person.borough"
      :property="person.property"
      :location="person.location"
      :species="person.species_description"
    />
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default(await import ('vue')).defineComponent{
    data() {
        return {
            person: []
        };
    },
    methods: {
        getPerson: async function () {
            let res = await fetch("https://data.cityofnewyork.us/resource/fuhs-xmg2.json");
            let data = await res.json();
            data.forEach(person => {
                this.persons.push(animal);
            });
        }
    },
    mounted: async function () {
        await this.getPerson();
    },
    components: { Card }
}
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
 -->
