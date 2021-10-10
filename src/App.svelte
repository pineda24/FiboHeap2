<script>
  export let name;
  import { fheap } from "../public/services/fiboHeap";

  let element = [];

  let num;
  let min;

  const handleSubmit = () => {
    fheap.insert(num);
    console.log("Charlie");
    fheap.printRaizMain(fheap.root);
    console.log("Charlie");
    min = fheap.small();
    fheap.elementsHeap(fheap.root);
    element = fheap.element;
    fheap.element = [];
  };

  const deleteMin = () => {
    fheap.delete();
    min = fheap.small();
    fheap.elementsHeap(fheap.root);
    element = fheap.element;
    fheap.element = [];
  };
</script>

<body>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-4">
        <form
          on:submit|preventDefault={handleSubmit}
          class="form card card-body bg-dark mb-2"
        >
          <h4 class="letter">Fibonacci Heap</h4>
          <input
            type="number"
            bind:value={num}
            placeholder="Write an number"
            class="form-control bg-dark text-white border-0 my-4"
          />
          <button type="submit" class="btn btn-primary"> Save </button>
        </form>

        <form
          on:submit|preventDefault={deleteMin}
          class="form card card-body bg-dark mb-2"
        >
          <h4 class="letter mb-4">
            Min -> <span>
              {#if min}
                {min.val}
              {:else}
                There isn´t
              {/if}
            </span>
          </h4>
          <button type="submit" class="btn btn-danger"> Delete Min </button>
        </form>
        <!-- <p>{element}</p> -->
      </div>
      <div class="col-md-8">
        <div class="card card-body bg-dark">
          <h4 class="letter">List Fibonacci Heap</h4>
        </div>
        <div class="mt-3">
          {#if element.length != 0}
            {#each element as item, index}
              <ul class="list-group">
                {#if index % 2 == 0}
                  <li class="list-group-item list-group-item-info">
                    {item}
                  </li>
                {:else}
                  <li class="list-group-item list-group-item-light">
                    {item}
                  </li>
                {/if}
              </ul>
            {/each}
          {/if}
          <!-- {#each words as w}
            <div class="card card-body mb-2 words">
              <div class="row">
                <h5>{w.word}</h5>
                <p class="card-text">{w.meaning}</p>
                <div class="d-flex justify-content-end">
                  <botton class="btn btn-danger">Delete</botton>
                </div>
              </div>
            </div>
          {/each} -->
        </div>
      </div>
    </div>
  </div>
</body>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h4 {
    color: white;
  }

  .words {
    width: 26rem;
    margin-left: 2rem;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
